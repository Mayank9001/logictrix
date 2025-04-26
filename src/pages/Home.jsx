import React from "react";
import TwoClouds from "../assets/TwoClouds.svg";
import OneCloud from "../assets/OneCloud.svg";
import SecurityPic from "../assets/SecurityPic.svg";
import ConfigureWelcomeMessage from "../components/ConfigureWelcomeMessage";
import image from "../assets/image.png";
import OptInManagement from "../components/OptInManagement";
const Home = () => {
  return (
    <div className="w-screen h-screen bg-pink-300 grid place-items-center font-inter overflow-auto">
      <div className="w-full md:w-11/12 lg:w-9/12 h-full bg-green-200 border-l border-l-[#D7DEE7]">
        {/* Top Navbar */}
        <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center h-auto sm:h-16 bg-white px-4 py-3 sm:py-0 border-b border-b-[#D7DEE7] gap-2">
          <h1 className="font-semibold text-xl sm:text-2xl leading-[100%] tracking-normal">
            Opt-In Management
          </h1>
          <span className="flex gap-2 sm:gap-4">
            <button className="px-4 sm:px-6 py-2 rounded-lg border border-[#BDBDC8] text-base sm:text-lg text-gray-600 font-medium hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 sm:px-6 py-2 rounded-lg bg-[#1C73E8] text-base sm:text-lg text-white font-medium hover:bg-blue-700">
              Save
            </button>
          </span>
        </nav>

        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-32 pt-4 text-[#1C73E8] font-inter font-semibold text-xl sm:text-2xl leading-[100%] tracking-[0px] pb-4">
          <h1 className="pt-4 sm:pt-8 text-center sm:text-left">
            Opt-In Management
          </h1>
        </div>

        {/* Container */}
        <div className="w-full sm:w-11/12 lg:w-[60rem] mx-auto bg-white gap-[60px] rounded-2xl border border-[#D7DEE7] p-6 relative z-10">
          <div>
            <div className="flex flex-row gap-4">
              <img src={image} className="w-12 h-12"></img>
              <div className="flex flex-col gap-2 font-semibold text-[22px] leading-[100%] tracking-[0px] font-inter text-[#1C73E8]">
                <h1 className="text-[#1C73E8] font-semibold text-lg leading-[100%] tracking-normal">
                  Opt-In
                </h1>
                <p className="text-[#1A1A1A] font-normal text-sm leading-[150%] tracking-[0px]">
                  A text that explains what opt-in is
                </p>
              </div>
            </div>
            <div className="flex w-full h-auto">
              <OptInManagement />
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
