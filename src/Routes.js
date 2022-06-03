import React from "react";
import HomeStyle1 from "pages/HomeStyle1";
import HomeStyle2 from "pages/HomeStyle2";
import SinglePage from "pages/SinglePage";
import Blog from "pages/Blog";
import AboutUs from "pages/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singlepage" element={<SinglePage />} />
        <Route path="/homestyle2" element={<HomeStyle2 />} />
        <Route path="/homestyle1" element={<HomeStyle1 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
