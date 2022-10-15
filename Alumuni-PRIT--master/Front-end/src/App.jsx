import { BrowserRouter } from "react-router-dom";

// components
import Navigation from "./components/Navigation";
import AnimatedRoutes from "./components/AnimatedRoutes";

// context
import { UserProvider } from "./context/UserContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter className="App">
      <UserProvider>
        <Navigation />
        <AnimatedRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
