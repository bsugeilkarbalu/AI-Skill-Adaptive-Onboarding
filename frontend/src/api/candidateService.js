import API from "./api";

export const getCandidateDashboard = async () => {
  const response = await API.get("/api/user/dashboard");
  return response.data;
};

export const getWeaknessAnalysis = async () => {
  const response = await API.get("/api/weakness/latest");
  return response.data;
};

export const getLearningPath = async (skills) => {
  const response = await API.post("/api/learning/recommend", {
    skills,
  });
  return response.data;
};