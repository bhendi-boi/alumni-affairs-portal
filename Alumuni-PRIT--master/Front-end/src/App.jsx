import { HashRouter } from "react-router-dom";

// components
import AnimatedRoutes from "./components/AnimatedRoutes";

// context
import { UserProvider } from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <HashRouter className="App">
      <UserProvider>
        <AnimatedRoutes />
      </UserProvider>
    </HashRouter>
  );
}

export default App;
