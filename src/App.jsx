import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import PublicRoute from "./Routes/PublicRoute.jsx";
import AuthProvider from "./Context/Authcontext.jsx";

// Component imports
import Homepage from "./Homepage.jsx";
import LoginPage from "./Dashborard/Loginpage.jsx";
import SignupPage from "./Dashborard/Signuppage.jsx";
import Dashboard from "./Dashborard/Dash.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import JobListingsApp from "./Jobdata/JobListingsApp.jsx";
import JobDetail from "./Jobdata/JobDetail.jsx";
import Mainjob from "./Jobdata/Mainjob.jsx";
import JobPosting from "./Jobdata/JobPosting.jsx";

// Create a wrapper component to conditionally show Navbar
const AppContent = () => {
  const location = useLocation();
  
  // Don't show Navbar on homepage (since Homepage has its own navigation)
  const showNavbar = location.pathname !== '/';

  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <main className="main-content">
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={<Homepage />} />
          
          {/* Job Routes */}
          <Route path="/jobs" element={<JobListingsApp />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/browse-jobs" element={<Mainjob />} />
          
          {/* Job Posting Route - Protected */}
          <Route
            path="/post-job"
            element={
              <ProtectedRoute>
                <JobPosting />
              </ProtectedRoute>
            }
          />
          
          {/* Public routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Redirects */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;