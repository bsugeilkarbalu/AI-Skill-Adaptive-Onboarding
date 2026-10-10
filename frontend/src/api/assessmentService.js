import API from "./api";

export const startAssessment = async (skills) => {
  const response = await API.post("/api/assessment/start", {
    skills,
  });

  return response.data;
};

export const submitAssessment = async (answers) => {
  const response = await API.post("/api/assessment/submit", {
    answers,
  });

  return response.data;
};