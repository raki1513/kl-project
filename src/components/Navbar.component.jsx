import React from 'react'
import Image from '../assets/image.jpeg'
import { Link } from 'react-router-dom'

function Navbarcomponent() {
    const dark=()=>{
        const a=document.getElementById('b1')
        a.style.backgroundColor('#DEDEDE')

    }
  return (
    <div className='flex bg-blue-500/100 w-auto h-[50px] space-x-8  justify-between'>
        <div className="flex items-center text-white text-[1vh]">
            <h2>M sathi: A grievance redressal app for faculty & students of klu</h2>

        </div>
        <ul className='flex space-x-6 items-center justify-center text-white'>
            <li><h2>Home</h2></li>
            <li><h2>Contact Us</h2></li>
            <li><h2>About Us</h2></li> 
            <li><h2>FAQs/Help</h2></li>   
        </ul>
        <div className='flex items-center justify-center ' >
            <Link to={"/login"}><button className=' mx-7 w-[8vh] h-[5vh] bg-white rounded-md'>Login</button></Link>


            <Link to={"/signup"}><button className=' mx-7 w-[8vh] h-[5vh] bg-white rounded-md'>Sign Up</button></Link>
        </div>
      
    </div>
  )
}

export default Navbarcomponent
