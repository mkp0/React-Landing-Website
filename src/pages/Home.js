import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import logo1 from "../1.svg";
import logo2 from "../2.svg";
import logo3 from "../3.svg";
import ShowCase from "../components/ContantShowCase";

function Home() {
  const [showCase, setShowCase] = useState([]);

  useEffect(() => {
    setShowCase([
      {
        id: 1,
        logo: logo1,
      },
      {
        id: 2,
        logo: logo2,
      },
      {
        id: 3,
        logo: logo3,
      },
    ]);
  }, []);

  return (
    <div>
      <Carousel></Carousel>
      {showCase.map((item, idx) => (
        <ShowCase key={item.id} logo={item.logo} idx={idx}></ShowCase>
      ))}
      <Footer></Footer>
    </div>
  );
}

export default Home;
