import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Community from "./pages/Community";

// components
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/community">
          <Route index element={<Community />} />
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
