import React from 'react'
import './Skills.css'
import Html from '../../assets/Html.png' 
import css from '../../assets/css.jpeg' 
import bootstrap from '../../assets/bootstrap.png' 
import js from '../../assets/js.png' 
import react from '../../assets/react.png' 
import mui from '../../assets/mui.png' 
import nodejs from '../../assets/nodejs.png' 
import mongodb from '../../assets/mongodb.png' 
import express from '../../assets/express.png' 
import git from '../../assets/git.png' 
import github from '../../assets/github.jpg' 


export const Skills = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 Skills">
      <div className="col-md-12 Head">    <h1>Skills</h1> </div>
        
        <body>
        
        
    {/* 1 */}
    <div className="card-wrap" style={{float:"left"}}>
  <div className="card-header one">
    {/* <i className="fas fa-code"></i> */}
    <img src={Html} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">HTML</h1>
    <p className="card-text">HTML, or HyperText Markup Language, is a computer language used to create and structure web pages:.</p>
   
 </div>
</div>
{/* 2 */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header two">
    {/* <i className="fab fa-css3-alt"></i> */}
    <img src={css} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">CSS</h1>
    <p className="card-text"> “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). .</p>

 </div>
</div>
{/* 3 */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header three">
    {/* <i className="fab fa-html5"></i> */}
    <img src={bootstrap} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">BOOTSTRAP</h1>
    <p className="card-text">Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.</p>

 </div>
</div>
{/* 4 */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header four">
    {/* <i className="fab fa-js-square"></i> */}
    <img src={js} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">JAVASCRIPT</h1>
    <p className="card-text">JavaScript is a programming language that allows developers to create interactive and dynamic web pages: 
    What it does.</p>
    
 </div>
 
</div>
{/* 5 */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header five">
    {/* <i className="fab fa-js-square"></i> */}
    <img src={mui} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">MATERIAl UI</h1>
    <p className="card-text">Material UI (MUI) is a free, open-source React component library that implements Google's Material Design.</p>
   
 </div>
 
</div>
{/* 6 */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header six">
    {/* <i className="fab fa-js-square"></i> */}
    <img src={react} alt="" />

  </div>
  <div className="card-content">
    <h1 className="card-title">React JS</h1>
    <p className="card-text">React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components..</p>
    
 </div>
 
</div>
{/* 7 */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header seven">
    {/* <i className="fab fa-js-square"></i> */}
    <img src={nodejs} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">NODE_JS</h1>
    <p className="card-text">Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser..</p>

 </div>
 
</div>
{/* 8 */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header eight">
    {/* <i className="fab fa-js-square"></i> */}
    <img src={mongodb} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">MONGO_DB</h1>
    <p className="card-text">MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. . It stores data in a type of JSON format . </p>
   
 </div>
 
</div>
{/* 9 */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header nine">
    {/* <i className="fab fa-js-square"></i> */}
    <img src={express} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">EXPRESS</h1>
    <p className="card-text">Express is a web application framework that is part of the MERN stack, a collection of JavaScript technologies used to create web applications.</p>
    
 </div>
 
</div>
{/*10  */}
<div className="card-wrap git" style={{float:"left"}}>
  <div className="card-header ten">
    {/* <i className="fab fa-js-square"></i> */}
    <img src={git} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">GIT</h1>
    <p className="card-text">Git is a free, open-source version control system (VCS) that allows developers to store, track, and manage code.</p>
    
 </div>
 
</div>
{/*  */}
<div className="card-wrap" style={{float:"left"}}>
  <div className="card-header eleven">
    {/* <i className="fab fa-js-square"></i> */}
    <img src={github} alt="" />
  </div>
  <div className="card-content">
    <h1 className="card-title">GITHUB</h1>
    <p className="card-text">GitHub is a web-based interface that uses Git, the open source version control software that lets multiple people make separate changes to web pages at the same time.</p>
    
 </div>
 
</div>
{/*  */}
</body>

</div>
</div>
</div>
 
  )
}
