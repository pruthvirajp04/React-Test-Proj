import React from "react";
import Layout from "../components/Layout";
import "./Homepage.css";
import './Scroller.css'
import Top from './Top';
import Control from "../components/Controller/Control"


const HomePage = () => {
  return (
    <Layout>
      <Top />
    <Control /> 
 
   
    </Layout>
    
  );
};

export default HomePage;
