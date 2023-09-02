import React from 'react'
import '../App.css'
import Navbarcomponent from '../components/Navbar.component'
import Himage from '../assets/himage.jpg'



const HomePage = () => {
  return (
    <div>
        <Navbarcomponent/>
        <div className='flex h-screen items-center'>
            <div className=' mx-5 text-[64px] font-bold text-center font-[Montserrat]'>
                <p className='text-[3vh]'>
                The Online Faculty/Student Grievance Management System. This system is a web-based application that is designed to streamline the process of addressing and resolving grievances raised by faculty members and students within an educational institution.

                </p>
            </div>
            <div className=''>
              <img src={Himage} alt="Home" />
            </div>
        </div>
        
    </div>
  )
}

export default HomePage
