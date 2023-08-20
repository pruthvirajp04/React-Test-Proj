import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css';
import shield from '../assets/felicitylogo.jpeg';
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
      <span className="items m-2"><img src={shield} alt="" /></span>
        <span className="items m-2">Making the world more playful !</span>
       
        <span className="items m-2">One Game at a time</span>

      </div>
    </div>
  );
};

export default PreLoader;
