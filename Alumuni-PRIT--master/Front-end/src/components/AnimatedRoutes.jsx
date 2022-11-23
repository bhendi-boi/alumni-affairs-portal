import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import Events from "../pages/events/Events";
import Gallery from "../pages/Gallery";
import AboutUs from "../pages/about/AboutUs";
import Community from "../pages/community/Community";
import CommunitynityBranchEC from "../pages/community/CommunityBranchEC";
import CommunitynityBranchCS from "../pages/community/CommunityBranchCS";
import CommunitynityBranchSM from "../pages/community/CommunityBranchSM";
import CommunitynityBranchME from "../pages/community/CommunityBranchME";

// components
import ProtectedRoute from "./ProtectedRoute";
import AlumniTalks from "../pages/events/AlumniTalks";
import Reunions from "../pages/events/Reunions";
import Others from "../pages/events/Others";
import AlumniConferences from "../pages/events/AlumniConferences";
import AlumniMeets from "../pages/events/AlumniMeets";
import Convocation from "../pages/events/Convocation";

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
          <Route path="community" element={<Community />}>
            <Route path="ec" element={<CommunitynityBranchEC />} />
            <Route path="sm" element={<CommunitynityBranchSM />} />
            <Route path="me" element={<CommunitynityBranchME />} />
            <Route path="cs" element={<CommunitynityBranchCS />} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Events />}>
            <Route path="alumnitalks" element={<AlumniTalks />} />
            <Route path="reunions" element={<Reunions />} />
            <Route path="others" element={<Others />} />
            <Route path="alumniconferences" element={<AlumniConferences />} />
            <Route path="alumnimeets" element={<AlumniMeets />} />
            <Route path="convocation" element={<Convocation />} />
          </Route>
          <Route path="about" element={<AboutUs />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
