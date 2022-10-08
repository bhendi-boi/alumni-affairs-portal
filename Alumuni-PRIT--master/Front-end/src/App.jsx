import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Community from "./pages/community/Community";
import CommunitynityBranchEC from "./pages/community/CommunityBranchEC";
import CommunitynityBranchCS from "./pages/community/CommunityBranchCS";
import CommunitynityBranchSM from "./pages/community/CommunityBranchSM";
import CommunitynityBranchME from "./pages/community/CommunityBranchME";

// components
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter className="App">
      <Navigation />
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
    </BrowserRouter>
  );
}

export default App;
