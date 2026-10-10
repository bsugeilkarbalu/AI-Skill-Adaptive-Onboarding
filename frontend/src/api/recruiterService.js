import API from "./api";

export const getAdminDashboard = async () => {
  const response = await API.get("/api/admin/dashboard");
  return response.data;
};

export const getLeaderboard = async () => {
  const response = await API.get("/api/leaderboard/");
  return response.data;
};

export const analyzeSkillGap = async (candidateSkills, requiredSkills) => {
  const response = await API.post("/api/skill-gap/analyze", {
    candidate_skills: candidateSkills,
    required_skills: requiredSkills,
  });

  return response.data;
};