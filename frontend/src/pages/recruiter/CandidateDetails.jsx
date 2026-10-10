import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

function CandidateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleHire = () => {
    alert("Interview email notification sent successfully!");
    navigate("/recruiter/candidates");
  };

  return (
    <div className="app-layout">
      <Sidebar role="recruiter" />

      <main className="main-content">
        <Topbar title="Candidate AI Report" />

        <h1 className="page-title">Candidate Intelligence Report</h1>
        <p className="page-subtitle">Candidate ID: {id} • Verification, skill gaps, reasoning trace and hiring decision.</p>

        <div className="content-grid">
          <div className="panel">
            <h2>Candidate Profile</h2>
            <div className="info-grid">
              <p><b>Name:</b> Sugilkar B</p>
              <p><b>Email:</b> candidate@example.com</p>
              <p><b>Phone:</b> 9876543210</p>
              <p><b>Status:</b> Student</p>
              <p><b>Degree:</b> B.Tech IT</p>
              <p><b>College:</b> ABC Engineering College</p>
            </div>
            <button className="action-btn mt-sm">View Resume File</button>
          </div>

          <div className="panel">
            <h2>AI Decision Score</h2>
            <div className="big-score">86%</div>
            <p className="risk-low"><b>Low Risk • Interview Recommended</b></p>
            <div className="analysis-box">
              <p>Candidate skills are strongly supported by projects and technical evidence.</p>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div className="panel">
            <h2>Verified Skills</h2>
            <span className="skill-badge">Python</span>
            <span className="skill-badge">SQL</span>
            <span className="skill-badge">React.js</span>
            <span className="skill-badge">FastAPI</span>
            <span className="skill-badge">MongoDB</span>
          </div>

          <div className="panel">
            <h2>Weak Skills</h2>
            <span className="weak-badge">Cloud Deployment</span>
            <span className="weak-badge">System Design</span>
            <span className="weak-badge">Advanced Analytics</span>
          </div>
        </div>

        <div className="panel mt">
          <h2>AI Reasoning Trace</h2>
          <ul className="reason-list">
            <li>Python skill supported by backend project evidence.</li>
            <li>SQL verified through database project workflow.</li>
            <li>React.js supported by frontend implementation.</li>
            <li>Cloud deployment needs stronger evidence.</li>
          </ul>
        </div>

        <div className="panel mt">
          <h2>Recruiter Decision</h2>
          <p className="muted-text">This candidate is suitable for interview based on AI score and JD match.</p>
          <button className="hire-btn" onClick={handleHire}>
            Hire for Interview & Send Email
          </button>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default CandidateDetails;