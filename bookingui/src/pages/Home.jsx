import React from "react";
import "./home.scss";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Announcement type={"Upper half"} />
      <Feature />
      <Announcement type={"lower half"} />
      <Footer />
    </div>
  );
};

export default Home;
