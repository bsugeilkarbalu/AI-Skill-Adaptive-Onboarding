import { useEffect, useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

import { getLearningPath } from "../../api/candidateService";

function LearningRoadmap() {

  const [roadmap, setRoadmap] = useState({});

  useEffect(() => {

    const loadRoadmap = async () => {

      try {

        const skills =
          JSON.parse(
            localStorage.getItem("resumeSkills")
          ) || [];

        const data =
          await getLearningPath(skills);

        setRoadmap(
          data.learning_paths || {}
        );

      } catch (error) {

        console.log(
          "Roadmap loading error:",
          error
        );
      }
    };

    loadRoadmap();

  }, []);

  return (
    <div className="app-layout">

      <Sidebar role="candidate" />

      <main className="main-content">

        <Topbar title="Learning Roadmap" />

        <h1 className="page-title">
          Personalized AI Learning Roadmap
        </h1>

        <p className="page-subtitle">
          Improve weak skills and increase
          recruiter confidence using adaptive
          AI-generated learning recommendations.
        </p>

        <div className="content-grid">

          {
            Object.keys(roadmap).length > 0
              ? (
                Object.entries(roadmap).map(
                  ([skill, topics], index) => (

                    <div
                      className="panel"
                      key={index}
                    >

                      <h2>
                        {skill.toUpperCase()}
                      </h2>

                      <p className="muted-text">
                        Recommended learning modules
                        generated from AI analysis.
                      </p>

                      <div className="timeline">

                        {
                          topics.map((topic, i) => (

                            <div
                              className="timeline-item"
                              key={i}
                            >

                              <h3>
                                Module {i + 1}
                              </h3>

                              <p>
                                {topic}
                              </p>

                            </div>
                          ))
                        }

                      </div>

                    </div>
                  )
                )
              )
              : (
                <div className="panel">

                  <h2>
                    No Learning Roadmap Available
                  </h2>

                  <p className="muted-text">
                    Upload resume and complete
                    assessment to generate roadmap.
                  </p>

                </div>
              )
          }

        </div>

        <div className="panel mt">

          <h2>
            AI Career Insight
          </h2>

          <p>
            This roadmap is dynamically generated
            using your verified skills, assessment
            performance and weakness analysis.
          </p>

        </div>

        <Footer />

      </main>

    </div>
  );
}

export default LearningRoadmap;