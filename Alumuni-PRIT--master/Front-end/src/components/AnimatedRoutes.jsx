import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import ContactUs from "../pages/ContactUs";
import Community from "../pages/community/Community";
import CommunitynityBranchEC from "../pages/community/CommunityBranchEC";
import CommunitynityBranchCS from "../pages/community/CommunityBranchCS";
import CommunitynityBranchSM from "../pages/community/CommunityBranchSM";
import CommunitynityBranchME from "../pages/community/CommunityBranchME";

// components
import ProtectedRoute from "./ProtectedRoute";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="signup" element={<SignUp />} />
          <Route path="community">
            <Route index element={<Community />} />
            <Route path="ec" element={<CommunitynityBranchEC />} />
            <Route path="sm" element={<CommunitynityBranchSM />} />
            <Route path="me" element={<CommunitynityBranchME />} />
            <Route path="cs" element={<CommunitynityBranchCS />} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Events />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
