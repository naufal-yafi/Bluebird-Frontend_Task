import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
      <BottomNav />
    </Fragment>
  );
};

export default App;
