import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

function RecruiterProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Recruiter profile saved!");
    navigate("/recruiter/company");
  };

  return (
    <div className="app-layout">
      <Sidebar role="recruiter" />

      <main className="main-content">
        <Topbar title="Recruiter Profile" />

        <h1 className="page-title">Recruiter Identity</h1>
        <p className="page-subtitle">Add professional recruiter and hiring role details.</p>

        <div className="content-grid">
          <div className="panel">
            <h2>Professional Details</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Recruiter Full Name" required />
              <input type="email" placeholder="Official Email" required />
              <input type="text" placeholder="Phone Number" required />
              <select required>
                <option value="">Recruiter Role</option>
                <option>HR Manager</option>
                <option>Talent Acquisition</option>
                <option>Technical Recruiter</option>
                <option>Hiring Manager</option>
              </select>
              <input type="url" placeholder="LinkedIn URL" />
              <button className="action-btn" type="submit">Save & Continue</button>
            </form>
          </div>

          <div className="panel">
            <h2>Recruiter Features</h2>
            <div className="recommendation-item"><h4>AI Screening</h4><p>View skill authenticity score.</p></div>
            <div className="recommendation-item"><h4>JD Matching</h4><p>Compare candidate skills with role requirements.</p></div>
            <div className="recommendation-item"><h4>Email Hiring</h4><p>Send interview selection notification.</p></div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default RecruiterProfile;