import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
      <Route path="/" element=<LandingPage/> exact/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
