import { useEffect, useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

import {
  getAdminDashboard,
  getLeaderboard,
} from "../../api/recruiterService";

function RecruiterDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const loadRecruiterData = async () => {
      try {
        const adminData = await getAdminDashboard();
        setDashboard(adminData);

        const leaderboardData = await getLeaderboard();
        setLeaderboard(leaderboardData.leaderboard || []);
      } catch (error) {
        console.log("Recruiter dashboard error:", error);
      }
    };

    loadRecruiterData();
  }, []);

  return (
    <div className="app-layout">
      <Sidebar role="recruiter" />

      <main className="main-content">
        <Topbar title="Recruiter Analytics Dashboard" />

        <h1 className="page-title">AI Hiring Intelligence</h1>

        <p className="page-subtitle">
          Monitor candidate verification, assessment performance, and skill authenticity insights.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{dashboard?.total_users || 0}</p>
          </div>

          <div className="stat-card">
            <h3>Total Assessments</h3>
            <p>{dashboard?.total_assessments || 0}</p>
          </div>

          <div className="stat-card">
            <h3>Average Score</h3>
            <p>{dashboard?.average_score || 0}%</p>
          </div>

          <div className="stat-card">
            <h3>Top Candidates</h3>
            <p>{leaderboard.length}</p>
          </div>
        </div>

        <div className="content-grid">
          <div className="panel">
            <h2>Latest Candidate Results</h2>

            {dashboard?.latest_results?.length > 0 ? (
              dashboard.latest_results.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <h3>Candidate Result #{index + 1}</h3>
                  <p>
                    Score: {item.obtained_score}/{item.total_score}
                  </p>
                  <p>Percentage: {item.percentage}%</p>
                </div>
              ))
            ) : (
              <p className="muted-text">No recent assessment results found.</p>
            )}
          </div>

          <div className="panel">
            <h2>Leaderboard</h2>

            {leaderboard.length > 0 ? (
              leaderboard.map((item, index) => (
                <div className="recommendation-item" key={index}>
                  <h4>Rank #{item.rank}</h4>
                  <p>Percentage: {item.percentage}%</p>
                  <p>
                    Score: {item.obtained_score}/{item.total_score}
                  </p>
                </div>
              ))
            ) : (
              <p className="muted-text">No leaderboard data available.</p>
            )}
          </div>
        </div>

        <div className="panel mt">
          <h2>AI Hiring Summary</h2>

          <p>
            The platform uses resume parsing, skill extraction, adaptive assessment, and score-based ranking to support recruiter decision making.
          </p>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default RecruiterDashboard;