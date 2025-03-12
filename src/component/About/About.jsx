import React from 'react'
import About_img from '../../assets/About_img.jpg' 

import './About.css'

export const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 About">
         <div className="col-md-12 heading"><h3>About Me</h3></div>
         
          
          <div className="col-md-7 About_me"><p>Hi! I'm Shubham Salke, a motivated and detail-oriented MERN stack developer with a strong foundation in web development, having recently completed my degree in BCS(Bachelor of Computer Science )  with distinction. I possess hands-on experience with the MERN stack (MongoDB, Express.js, React.js, and Node.js), building dynamic, responsive, and user-friendly web applications. I have a solid understanding of front-end and back-end development, API integration, and database management. As a fresher, I am eager to apply my skills to real-world projects, continuously learn new technologies, and contribute effectively to a dynamic development team.

When I'm not coding, you'll find me exploring various forts, playing cricket, or tracking on mountains. I'm always excited to learn new things and take on new challenges!</p></div>
          <div className="col-md-5 photo"><img src={About_img} alt="" /></div>
        
          </div>

        </div>
      </div>
     
  )
}
