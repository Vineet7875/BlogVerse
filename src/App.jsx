import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Navbar/Nav";
import AllBlogsPage from "./Home/AllBlogsPage";
import About from "./About/About";
import BlogContent from "./BlogContent/BlogContent";
import PublishPage from "./PublishForm/PublishPage";
import Footer from "./Footer/Footer"
import Home from "./Home/Home"
import Blogs from './BlogPage/Blogs';
import UnderCon from './UnderConstructionPage/UnderCon'
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import DialogBox from "./DiaglogBox/Diaglogbox";

import { auth } from "./Authentication/firebase";
function Blog() {
  const [userName, setUserName] = useState("");
  const [filterKeyword, setFilterKeyword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
      <Router>
        <Nav setFilterKeyword={setFilterKeyword} filterKeyword={filterKeyword} />
        <Routes>

          <Route
            path="/"
            element={
              <>

                <Home />
                <AllBlogsPage filterKeyword={filterKeyword} />
                <Footer />
              </>
            }
          />
          <Route
            path="/BlogContent"
            element={
              <>
                <BlogContent />
                <Footer />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/PublishPage"
            element={
              <>
                <PublishPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/UnderCon"
            element={
              <>
                <UnderCon />
                <Footer />
              </>
            }
          />

          <Route
            path="/AllBlogs"
            element={
              <>
                <Blogs filterKeyword={filterKeyword} />
                <Footer />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/DiaglogBox" element={<DialogBox />} />
          <Route path="/DiaglogBox/login" element={<Login />} />
          <Route path="/DiaglogBox/signup" element={<Signup />} />
        </Routes>

      </Router>
    </>
  );
}

export default Blog;