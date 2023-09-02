import React, { useState } from "react";
import Navbarcomponent from "../components/Navbar.component";
import image from "../assets/image.jpeg";


const Loginpage = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  function changehandle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function submitHandle() {
    console.log(data);
  }

  return (
    <>
    <Navbarcomponent/>
    
    <div className="flex h-screen w-full overflow-hidden font-[Poppins]">
    

      <div className="w-[160vh] ">
        <img src={image} alt="login" />
       
      </div>

      <div className="flex flex-col h-screen  items-center justify-center w-full space-x-20 space-y-20">
      <h1 className=" text-[#5F74DD]  text-[3.5vh] font-black justify-center">Login</h1>

        <div className="flex flex-col  justify-center space-y-4 item-center ">
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            onChange={changehandle}
            className="w-[25vh] h-[5vh] rounded-3xl border-2"
            name="username"
          />
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            onChange={changehandle}
            className="w-[25vh] h-[5vh] rounded-3xl border-2"
            name="password"
          />
          <div className="flex items-center justify-center">
          <button
            onClick={submitHandle}
            className="w-[15vh] h-[5vh] bg-[#5F74DD] rounded-3xl text-white">
            Submit
          </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Loginpage;
