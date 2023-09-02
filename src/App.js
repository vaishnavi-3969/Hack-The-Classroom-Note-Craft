import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { useAuth0 } from "@auth0/auth0-react";
import StickyNotes from "./pages/StickyNotes";
import Navbar from "./components/Navbar";

const backgroundStyle = {
  background: `linear-gradient(45deg, #FF6B6B, #FFE66D, #8A3AB9)`,
};

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <div style={backgroundStyle} className="min-h-screen text-gray-900 transition duration-500 ease-in-out relative p-10">
      <BrowserRouter>
     {
        isAuthenticated && <Navbar/>
     }
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/homepage" /> : <LandingPage />}
            exact
          />
          <Route path="/homepage" element={<HomePage />} exact />
          <Route path="sticky_notes" element={<StickyNotes/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
