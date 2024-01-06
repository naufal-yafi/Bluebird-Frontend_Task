import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import MyBookPage from "../pages/MyBookPage";
import MyWishlistPage from "../pages/MyWishlistPage";
import VehicleDetailPage from "../pages/VehicleDetailPage";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishlist" element={<MyWishlistPage />} />
          <Route path="/book" element={<MyBookPage />} />
          <Route path="/vehicle" element={<VehicleDetailPage />} />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
