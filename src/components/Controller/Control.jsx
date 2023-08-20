import React from "react";
import profileImg from "../../assets/indiamap.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import "./control.css";
const footer = () => {
  return (
    <>
     

      <div className="flex justify-center items-center homeBox mb-20" id='home'>
   
    <div className="aboutContent p-6">
        <h2 className='home__title'> Connecting hearts, Changing lives  <br /></h2>
        <h2 className='home__title'> Join our cause on "Arohana" social Hub <br /></h2>
    <p className='about__text'> Using NGO Worldwide Our Social Platform Empowers Collaborate impact connecting Changemakers across the globe.
    
    </p>
    <div className="btnBox flex justify-start items-left">
    <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    >
      Donate Now
    </button>
    <button
            type="button"
            className="inline-block rounded border-2 border-info px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Discover   
            <FontAwesomeIcon icon={faCompass} size="1.5x" color="blue" />
          </button>

   </div>
    </div>
    <div className="imgBoxControl">
    <img src={profileImg} alt="" className="gameImage"  />
    </div>
   </div>
  
    </>
  );
};

export default footer;
