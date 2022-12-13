import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Root from "../pages/Root";
import Home from "../pages/Home";
import User from "../pages/User";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Error from "../pages/Error";
import Events from "../pages/events/Events";
import Gallery from "../pages/Gallery";
import AboutUs from "../pages/about/AboutUs";
import Services from "../pages/Services";
import Fund from "../pages/Fund";

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
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path="about" element={<AboutUs />} />
          <Route path="events" element={<Events />}>
            <Route path="alumnitalks" element={<AlumniTalks />} />
            <Route path="reunions" element={<Reunions />} />
            <Route path="others" element={<Others />} />
            <Route path="alumniconferences" element={<AlumniConferences />} />
            <Route path="alumnimeets" element={<AlumniMeets />} />
            <Route path="convocation" element={<Convocation />} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="fund" element={<Fund />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
