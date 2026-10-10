import { NavLink } from "react-router-dom";

function Sidebar({ role }) {
  return (
    <aside className="sidebar">
      <div>
        <h2 className="logo">SkillVerify AI</h2>
      </div>

      <nav>
        {role === "candidate" && (
          <>
            <NavLink to="/candidate/dashboard">
              Dashboard
            </NavLink>

            <NavLink to="/candidate/profile">
              Candidate Profile
            </NavLink>

            <NavLink to="/candidate/upload-resume">
              Resume Upload
            </NavLink>

            <NavLink to="/candidate/roadmap">
              Learning Roadmap
            </NavLink>
          </>
        )}

        {role === "recruiter" && (
          <>
            <NavLink to="/recruiter/dashboard">
              Dashboard
            </NavLink>

            <NavLink to="/recruiter/profile">
              Recruiter Profile
            </NavLink>

            <NavLink to="/recruiter/company">
              Company Profile
            </NavLink>

            <NavLink to="/recruiter/upload-jd">
              JD Analysis
            </NavLink>

            <NavLink to="/recruiter/candidates">
              Candidates
            </NavLink>
          </>
        )}

        <NavLink
          to="/login"
          className="logout-link"
        >
          Logout
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;