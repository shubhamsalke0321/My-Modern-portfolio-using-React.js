import React from 'react'
import './Home.css'
import profile_img from '../../assets/profile_img.jpg' 
import shubhamsalkeresume from '../../assets/shubhamsalkeresume.pdf' 
import Contact_Me from '../Contact_Me/Contact_Me.jsx'



export const Home = () => {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-12 Home">
                   <div className='profile_image'>    
                           <img src={profile_img} alt="" />
                   </div>
                <div className='col-md-12 name'>
      <h1>Hello, Hi! I am Shubham Salke</h1>
                 </div>
            <div className='col-md-12 course'>
       <h2>FULL STACK</h2>
       <h2>WEB DEVELOPER</h2>
               </div>
               <div className='col-md-12 text'>
        <h1>I am Passoinate Full Stack Web Developer(MERN) With</h1>
        <h1> a Focus On Creating Stuingin Pixel-Perfect intractive </h1>
        <h1>Website</h1>
                       </div>
        

        {/*  */}
     <div className="col-md-6 Home-action">
        <div className='Home-connect'> <div className=""> <a className="nav-link"  href="./Contact_Me">Connect With Me</a>
            </div></div>

       <a href={shubhamsalkeresume} download="shubhamsalkeresume"> <div className='Home-Resume'> My Resume</div></a>
    </div>
{/*  */}


      </div>
    </div>
    </div>
  )
}
