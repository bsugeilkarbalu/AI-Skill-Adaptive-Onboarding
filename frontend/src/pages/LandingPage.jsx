import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <h1 className="logo">SkillVerify AI</h1>

        <div className="nav-actions">
          <Link to="/login" className="nav-link">
            Login
          </Link>

          <Link to="/register" className="primary-btn">
            Register
          </Link>
        </div>
      </nav>

      <section className="landing-simple-center">
        <span className="hero-label">
          AI + NLP + ML Recruitment Platform
        </span>

        <h1>
          Verify Real Skills, Detect Fake Claims
        </h1>

        <p>
          A professional AI-powered recruitment and adaptive onboarding system.
        </p>
      </section>
    </div>
  );
}

export default LandingPage;