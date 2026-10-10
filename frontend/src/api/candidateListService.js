import API from "./api";

export const getCandidates = async () => {
  const response = await API.get("/api/leaderboard/");
  return response.data;
};