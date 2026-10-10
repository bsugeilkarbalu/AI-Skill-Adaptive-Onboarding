import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import Footer from "../../components/common/Footer";

function CompanyProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Company profile saved!");
    navigate("/recruiter/upload-jd");
  };

  return (
    <div className="app-layout">
      <Sidebar role="recruiter" />

      <main className="main-content">
        <Topbar title="Company Profile" />

        <h1 className="page-title">Company Intelligence Setup</h1>
        <p className="page-subtitle">Map recruiters, candidates and job descriptions under company profile.</p>

        <div className="content-grid">
          <div className="panel">
            <h2>Company Details</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Company Name" required />
              <select required>
                <option value="">Industry</option>
                <option>Information Technology</option>
                <option>Software Development</option>
                <option>AI / ML</option>
                <option>FinTech</option>
                <option>EdTech</option>
              </select>
              <input type="url" placeholder="Company Website" required />
              <input type="url" placeholder="Company LinkedIn" />
              <input type="text" placeholder="Company Location" required />
              <textarea rows="6" placeholder="Company Description" required></textarea>
              <button className="action-btn" type="submit">Save Company</button>
            </form>
          </div>

          <div className="panel">
            <h2>Security Mapping</h2>
            <div className="analysis-box">
              <h3>Company-Based Access</h3>
              <p>Recruiter can view only candidates mapped to the same company ID.</p>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default CompanyProfile;