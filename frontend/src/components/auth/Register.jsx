import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authService";

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const selectedRole = e.target.role.value;

    const backendRole =
      selectedRole.toLowerCase() === "recruiter"
        ? "admin"
        : "candidate";

    try {
      await registerUser({
        name,
        email,
        password,
        role: backendRole,
      });

      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.log("Register error:", error.response?.data || error);
      alert(error.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>

        <p className="auth-subtitle">
          Start your AI-powered skill verification journey
        </p>

        <form onSubmit={handleRegister}>
          <input
            name="name"
            type="text"
            placeholder="Full name"
            className="auth-input"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="auth-input"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Create password"
            className="auth-input"
            required
          />

          <select name="role" className="auth-input" required>
            <option value="candidate">Candidate</option>
            <option value="recruiter">Recruiter</option>
          </select>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;