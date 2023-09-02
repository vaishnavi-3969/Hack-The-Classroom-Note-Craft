import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/homepage" /> : <LandingPage />}
            exact
          />
          <Route path="/homepage" element={<HomePage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
