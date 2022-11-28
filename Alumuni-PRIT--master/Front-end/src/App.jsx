import { BrowserRouter } from "react-router-dom";

// components
import AnimatedRoutes from "./components/AnimatedRoutes";

// context
import { UserProvider } from "./context/UserContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter className="App">
      <UserProvider>
        <AnimatedRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
