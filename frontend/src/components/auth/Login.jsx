import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authService";

function Login() {

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {

      const response = await loginUser({
        email,
        password,
      });

      alert("Login successful");

      if (response.role === "admin") {

        navigate("/recruiter/dashboard");

      } else {

        navigate("/candidate/dashboard");
      }

    } catch (error) {

      alert(
        error.response?.data?.detail ||
        "Login failed"
      );
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1 className="auth-title">
          Welcome Back
        </h1>

        <p className="auth-subtitle">
          Login to access your AI recruitment workspace
        </p>

        <form onSubmit={handleLogin}>

          <input
            name="email"
            type="email"
            placeholder="Enter email address"
            className="auth-input"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Enter password"
            className="auth-input"
            required
          />

          <button
            type="submit"
            className="auth-button"
          >
            Login
          </button>

        </form>

        <div className="auth-footer">

          <p>
            New user?
            {" "}
            <Link to="/register">
              Create account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;