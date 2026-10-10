import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/auth/ProtectedRoute";

import LandingPage from "../pages/LandingPage";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import CandidateProfile from "../pages/candidate/CandidateProfile";
import ResumeUpload from "../pages/candidate/ResumeUpload";
import LearningRoadmap from "../pages/candidate/LearningRoadmap";
import Assessment from "../pages/candidate/Assessment";

import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";
import RecruiterProfile from "../pages/recruiter/RecruiterProfile";
import CompanyProfile from "../pages/recruiter/CompanyProfile";
import JDUpload from "../pages/recruiter/JDUpload";
import CandidateList from "../pages/recruiter/CandidateList";
import CandidateDetails from "../pages/recruiter/CandidateDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/candidate/dashboard"
          element={
            <ProtectedRoute>
              <CandidateDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/candidate/profile"
          element={
            <ProtectedRoute>
              <CandidateProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/candidate/upload-resume"
          element={
            <ProtectedRoute>
              <ResumeUpload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/candidate/assessment"
          element={
            <ProtectedRoute>
              <Assessment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/candidate/roadmap"
          element={
            <ProtectedRoute>
              <LearningRoadmap />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/dashboard"
          element={
            <ProtectedRoute>
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/profile"
          element={
            <ProtectedRoute>
              <RecruiterProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/company"
          element={
            <ProtectedRoute>
              <CompanyProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/upload-jd"
          element={
            <ProtectedRoute>
              <JDUpload />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/candidates"
          element={
            <ProtectedRoute>
              <CandidateList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/candidate/:id"
          element={
            <ProtectedRoute>
              <CandidateDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;