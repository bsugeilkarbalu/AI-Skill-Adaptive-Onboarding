import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

function JDUpload() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("JD analyzed successfully!");
    navigate("/recruiter/candidates");
  };

  return (
    <div className="app-layout">
      <Sidebar role="recruiter" />

      <main className="main-content">
        <Topbar title="JD Intelligence" />

        <h1 className="page-title">Analyze Role Requirements</h1>
        <p className="page-subtitle">Extract required skills and generate candidate skill-gap reports.</p>

        <div className="content-grid">
          <div className="panel">
            <h2>Job Description Input</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Job Role Title" required />
              <select required>
                <option value="">Experience Level</option>
                <option>Fresher</option>
                <option>Junior</option>
                <option>Mid Level</option>
                <option>Senior</option>
              </select>
              <textarea rows="8" placeholder="Paste job description here..." required></textarea>
              <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={(e) => setFileName(e.target.files[0]?.name || "")} />
              {fileName && <div className="analysis-box"><h3>Selected JD</h3><p>{fileName}</p></div>}
              <button className="action-btn" type="submit">Analyze JD & Match</button>
            </form>
          </div>

          <div className="panel">
            <h2>Skill Preview</h2>
            <div className="badge-wrap">
              <span className="skill-badge">Python</span>
              <span className="skill-badge">FastAPI</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">React.js</span>
              <span className="skill-badge">Machine Learning</span>
            </div>
            <div className="gap-box">
              <h3>Adaptive Mapping</h3>
              <p>JD skills will be compared with verified candidate skills to generate roadmap.</p>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default JDUpload;