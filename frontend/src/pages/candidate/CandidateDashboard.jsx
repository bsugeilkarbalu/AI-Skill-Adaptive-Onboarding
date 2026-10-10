import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

import {
  getCandidateDashboard,
  getWeaknessAnalysis,
} from "../../api/candidateService";

function CandidateDashboard() {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(null);
  const [weakness, setWeakness] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const dashboardData = await getCandidateDashboard();
        setDashboard(dashboardData.dashboard || null);

        const weaknessData = await getWeaknessAnalysis();
        setWeakness(weaknessData.weakness || []);
      } catch (error) {
        console.log("Dashboard API error:", error);
      }
    };

    loadDashboard();
  }, []);

  const percentage = dashboard?.percentage || 0;
  const obtainedScore = dashboard?.obtained_score || 0;
  const totalScore = dashboard?.total_score || 0;

  const skills =
    JSON.parse(localStorage.getItem("resumeSkills")) || [];

  const riskLevel =
    percentage >= 80 ? "Low" : percentage >= 50 ? "Medium" : "High";

  return (
    <div className="app-layout">
      <Sidebar role="candidate" />

      <main className="main-content">
        <Topbar title="Candidate Command Center" />

        <h1 className="page-title">AI Skill Intelligence</h1>
        <p className="page-subtitle">
          Track resume verification, skill authenticity, JD match and adaptive learning progress.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Authenticity Score</h3>
            <p>{percentage}%</p>
          </div>

          <div className="stat-card">
            <h3>Verified Skills</h3>
            <p>{skills.length}</p>
          </div>

          <div className="stat-card">
            <h3>Assessment Score</h3>
            <p>
              {obtainedScore}/{totalScore}
            </p>
          </div>

          <div className="stat-card">
            <h3>Hiring Risk</h3>
            <p className={riskLevel === "Low" ? "risk-low" : "risk-high"}>
              {riskLevel}
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div className="panel">
            <h2>AI Resume Verification</h2>

            <p className="muted-text">
              Your resume skills and assessment performance are analyzed using AI-based backend verification.
            </p>

            <div className="badge-wrap">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <span className="skill-badge" key={index}>
                    {skill}
                  </span>
                ))
              ) : (
                <span className="skill-badge">No skills uploaded</span>
              )}
            </div>

            <div className="analysis-box">
              <h3>Verification Trace</h3>

              {dashboard ? (
                <>
                  <p>✔ Resume uploaded and parsed successfully.</p>
                  <p>✔ AI assessment completed with {percentage}% score.</p>
                  <p>✔ Result saved in MongoDB assessment history.</p>
                </>
              ) : (
                <>
                  <p>Upload resume and complete assessment to view analysis.</p>
                </>
              )}
            </div>
          </div>

          <div className="panel">
            <h2>AI Recommendations</h2>

            <div className="recommendation-item">
              <h4>Weak Areas</h4>
              <p>
                {weakness.length > 0
                  ? `${weakness.length} weak question(s) detected. Revise related topics.`
                  : "Excellent performance. No major weakness detected."}
              </p>
            </div>

            <div className="recommendation-item">
              <h4>Next Best Skill</h4>
              <p>
                Improve missing or low-score skills to increase recruiter confidence.
              </p>
            </div>

            <button
              className="action-btn"
              onClick={() => navigate("/candidate/roadmap")}
            >
              Open Learning Roadmap
            </button>
          </div>
        </div>

        <div className="panel mt">
          <h2>Activity Timeline</h2>

          <div className="timeline-item">
            <h3>Resume Uploaded</h3>
            <p>
              {skills.length > 0
                ? "NLP parsing completed successfully."
                : "Resume not uploaded yet."}
            </p>
          </div>

          <div className="timeline-item">
            <h3>AI Assessment</h3>
            <p>
              {dashboard
                ? `Assessment completed with ${percentage}% score.`
                : "Assessment not completed yet."}
            </p>
          </div>

          <div className="timeline-item">
            <h3>Roadmap Generated</h3>
            <p>Personalized learning path is generated from weak skills.</p>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default CandidateDashboard;