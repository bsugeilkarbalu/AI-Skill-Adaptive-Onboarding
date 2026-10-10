import API from "./api";

export const registerUser = async (userData) => {
  const response = await API.post("/api/auth/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post("/api/auth/login", userData);

  if (response.data.access_token) {
    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem("role", response.data.role);
    localStorage.setItem("email", userData.email);
  }

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("email");
};