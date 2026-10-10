import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";
import Loader from "../../components/common/Loader";

import { uploadResume } from "../../api/resumeService";

function ResumeUpload() {

  const navigate = useNavigate();

  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleUpload = async (e) => {

    e.preventDefault();

    const fileInput =
      e.target.querySelector("input[type='file']");

    const file = fileInput.files[0];

    if (!file) {

      alert("Please select your resume file");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();

    // Backend expects field name as "file"
    formData.append("file", file);

    try {

      const response = await uploadResume(formData);

      const extractedSkills =
        response.skills || [];

      setSkills(extractedSkills);

      // Store extracted skills
      localStorage.setItem(
        "resumeSkills",
        JSON.stringify(extractedSkills)
      );

      localStorage.setItem(
        "resumeExtractedText",
        response.extracted_text || ""
      );

      setIsLoading(false);

      alert(
        "Resume uploaded and AI skill extraction completed!"
      );

      // Navigate to assessment
      navigate("/candidate/assessment");

    } catch (error) {

      setIsLoading(false);

      alert(
        error.response?.data?.detail ||
        "Resume upload failed"
      );
    }
  };

  return (
    <div className="app-layout">

      <Sidebar role="candidate" />

      <main className="main-content">

        <Topbar title="Resume Verification" />

        <section className="upload-hero">

          <div>

            <span className="hero-label">
              AI Resume Intelligence
            </span>

            <h1>
              Upload Resume for Skill Authenticity Analysis
            </h1>

            <p>
              Extract technical skills, validate project evidence,
              detect fake claims, and generate explainable
              AI insights.
            </p>

          </div>

          <div className="upload-score-card">

            <h3>Analysis Engine</h3>

            <div className="mini-score">
              AI
            </div>

            <p>
              NLP + Machine Learning Verification
            </p>

          </div>

        </section>

        <div className="upload-layout">

          <div className="panel upload-panel">

            <h2>Upload Resume</h2>

            <p className="muted-text">
              Supported formats:
              PDF, DOCX
            </p>

            <form onSubmit={handleUpload}>

              <label className="file-drop">

                <input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={(e) =>
                    setFileName(
                      e.target.files[0]?.name || ""
                    )
                  }
                />

                <div className="file-icon">
                  📄
                </div>

                <h3>
                  {
                    fileName
                      ? fileName
                      : "Choose or drag your resume here"
                  }
                </h3>

                <p>
                  Recommended maximum size: 5MB
                </p>

              </label>

              {
                isLoading && (
                  <Loader
                    text="AI is extracting skills..."
                  />
                )
              }

              <button
                className="action-btn full-btn"
                type="submit"
                disabled={isLoading}
              >
                {
                  isLoading
                    ? "Analyzing..."
                    : "Upload & Run AI Verification"
                }
              </button>

            </form>

            {
              skills.length > 0 && (
                <div
                  className="panel"
                  style={{ marginTop: "18px" }}
                >

                  <h2>Extracted Skills</h2>

                  <div className="skill-tags">

                    {
                      skills.map((skill, index) => (
                        <span
                          className="skill-tag"
                          key={index}
                        >
                          {skill}
                        </span>
                      ))
                    }

                  </div>

                </div>
              )
            }

          </div>

        </div>

        <Footer />

      </main>

    </div>
  );
}

export default ResumeUpload;