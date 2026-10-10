import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

function CandidateProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Candidate profile saved successfully!");
    navigate("/candidate/upload-resume");
  };

  return (
    <div className="app-layout">
      <Sidebar role="candidate" />

      <main className="main-content">
        <Topbar title="Candidate Profile" />

        <h1 className="page-title">Build Candidate Identity</h1>
        <p className="page-subtitle">
          Add academic, professional and portfolio details for AI resume verification.
        </p>

        <div className="content-grid">
          <div className="panel">
            <h2>Personal Details</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />

              <select required>
                <option value="">Academic Status</option>
                <option value="student">Student</option>
                <option value="graduated">Graduated</option>
              </select>

              <input type="text" placeholder="Degree / Course" required />
              <input type="text" placeholder="College Name" required />
              <input type="text" placeholder="Passing Year" required />
              <input type="url" placeholder="LinkedIn URL" />
              <input type="url" placeholder="GitHub URL" />

              <button className="action-btn" type="submit">
                Save & Continue
              </button>
            </form>
          </div>

          <div className="panel">
            <h2>Profile Strength</h2>
            <div className="skill-meter">
              <div><span>Basic Details</span><b>90%</b></div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: "90%" }}></div></div>
            </div>
            <div className="skill-meter">
              <div><span>Portfolio Links</span><b>70%</b></div>
              <div className="progress-bar"><div className="progress-fill warning-fill" style={{ width: "70%" }}></div></div>
            </div>
            <div className="recommendation-item">
              <h4>Tip</h4>
              <p>Adding GitHub and LinkedIn improves recruiter trust score.</p>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default CandidateProfile;