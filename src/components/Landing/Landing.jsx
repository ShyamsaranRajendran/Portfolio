import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import Header from "./Header"
import DisplayContent from "./DisplayContent";
const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 10000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing">
      {showIntro && <Intro />}
      {!showIntro && (
        <div>
        {/* <Header /> */}
        <DisplayContent/>
        </div>
      )}
    </div>
  );
};

export default Home;
