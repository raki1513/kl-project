import React from "react";

import Navbarcomponent from "../components/Navbar.component";
import simage from '../assets/simage.png'
const Signuppage = () => {
  return (
    <>
    <Navbarcomponent/>
    <div className="flex w-[100%]">
      <div className="w-[50%] h-screen">
        <img src={simage} alt="signup" />
        
      </div>
     

      <div className="flex flex-col item-center justify-center font-[Poppins] text-[#5F74DD]">
      <h1 className=" flex text-[#5F74DD]  text-[3.5vh] font-black items-center justify-center">
        SignUp
      </h1>
        <div className="flex my-10 space-x-4 ">
          <label htmlFor="Firstname">First Name</label>
          <input type="text" className="w-[25vh] h-[5vh] rounded-md border-2" />

          <label htmlFor="Lastname">Last Name</label>
          <input type="text" className="w-[25vh] h-[5vh] rounded-md border-2" />
        </div>

        <div className="flex my-10 space-x-4 ">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="w-[25vh] h-[5vh] rounded-md border-2"
          />

          <label htmlFor="CPassword">Confirm Password</label>
          <input
            type="password"
            className="w-[25vh] h-[5vh] rounded-md border-2"
          />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <button
            
            className="w-[10vh] h-[5vh] bg-[#5F74DD] text-white rounded-xl">
            Submit
          </button>
          </div>
      </div>
    </div>
    </>
  );
};

export default Signuppage;
