import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyBookPage from "../pages/MyBookPage";
import VehicleDetailPage from "../pages/VehicleDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<MyBookPage />} />
        <Route path="/vehicle" element={<VehicleDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
