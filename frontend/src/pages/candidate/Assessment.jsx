import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { startAssessment, submitAssessment } from "../../api/assessmentService";

function Assessment() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const loadAssessment = async () => {
      const skills = JSON.parse(localStorage.getItem("resumeSkills")) || [];

      if (skills.length === 0) {
        alert("Please upload resume first");
        navigate("/candidate/resume-upload");
        return;
      }

      const data = await startAssessment(skills);
      setQuestions(data.questions || []);
    };

    loadAssessment();
  }, [navigate]);

  const handleAnswerChange = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
  };

  const handleSubmit = async () => {
    const formattedAnswers = questions.map((q) => ({
      question: q.question,
      answer: answers[q.question] || "",
    }));

    const data = await submitAssessment(formattedAnswers);
    setResult(data);

    localStorage.setItem("assessmentResult", JSON.stringify(data));
  };

  return (
    <div className="app-layout">
      <main className="main-content">
        <section className="panel">
          <h1>Adaptive Skill Assessment</h1>

          {questions.map((q, index) => (
            <div className="panel" key={index} style={{ marginTop: "16px" }}>
              <h3>{index + 1}. {q.question}</h3>

              {q.options?.map((option, i) => (
                <label key={i} style={{ display: "block", margin: "8px 0" }}>
                  <input
                    type="radio"
                    name={q.question}
                    onChange={() => handleAnswerChange(q.question, option)}
                  />{" "}
                  {option}
                </label>
              ))}
            </div>
          ))}

          {questions.length > 0 && !result && (
            <button className="action-btn" onClick={handleSubmit}>
              Submit Assessment
            </button>
          )}

          {result && (
            <div className="panel" style={{ marginTop: "20px" }}>
              <h2>Result</h2>
              <p>Total Score: {result.total_score}</p>
              <p>Obtained Score: {result.obtained_score}</p>
              <p>Percentage: {result.percentage}%</p>

              <button
                className="action-btn"
                onClick={() => navigate("/candidate/dashboard")}
              >
                Go to Dashboard
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Assessment;