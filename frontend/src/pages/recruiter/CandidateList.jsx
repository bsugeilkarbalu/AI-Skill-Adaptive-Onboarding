import { useEffect, useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

import { getCandidates } from "../../api/candidateListService";

function CandidateList() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {

    const loadCandidates = async () => {

      try {

        const data = await getCandidates();

        setCandidates(
          data.leaderboard || []
        );

      } catch (error) {

        console.log(
          "Candidate list error:",
          error
        );
      }
    };

    loadCandidates();

  }, []);

  return (
    <div className="app-layout">

      <Sidebar role="recruiter" />

      <main className="main-content">

        <Topbar title="Candidate Ranking" />

        <h1 className="page-title">
          AI Candidate Leaderboard
        </h1>

        <p className="page-subtitle">
          View ranked candidates based on AI assessment,
          skill verification and performance analysis.
        </p>

        <div className="panel">

          <h2>
            Top Candidates
          </h2>

          {
            candidates.length > 0
              ? (
                <div className="candidate-grid">

                  {
                    candidates.map((candidate, index) => (

                      <div
                        className="candidate-card"
                        key={index}
                      >

                        <div className="candidate-rank">
                          #{candidate.rank}
                        </div>

                        <h3>
                          Candidate {candidate.rank}
                        </h3>

                        <p>
                          Assessment Score:
                          {" "}
                          {
                            candidate.obtained_score
                          }
                          /
                          {
                            candidate.total_score
                          }
                        </p>

                        <p>
                          Percentage:
                          {" "}
                          {
                            candidate.percentage
                          }
                          %
                        </p>

                        <div className="candidate-badge">
                          {
                            candidate.percentage >= 80
                              ? "Highly Recommended"
                              : candidate.percentage >= 50
                              ? "Moderate"
                              : "Needs Improvement"
                          }
                        </div>

                      </div>
                    ))
                  }

                </div>
              )
              : (
                <p className="muted-text">
                  No candidate assessment data found.
                </p>
              )
          }

        </div>

        <div className="panel mt">

          <h2>
            AI Recruitment Insight
          </h2>

          <p>
            Candidates are automatically ranked using
            resume intelligence, adaptive assessment
            performance and AI-based verification metrics.
          </p>

        </div>

        <Footer />

      </main>

    </div>
  );
}

export default CandidateList;