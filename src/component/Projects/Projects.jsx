import React from 'react'
import './Projects.css'
import job_Applicaction_form from '../../assets/job Applicaction form .png'
import gym from '../../assets/gym.png'
import Restorent_project from '../../assets/Restorent project.png'
import bmi_calculator from '../../assets/bmi_calculator.png'
import simple_interest_calculator from '../../assets/simple_interest_calculator.png'
import A1restaurant from '../../assets/A1restaurant.png'
import EMS from '../../assets/EMS.png'
import portfolio from '../../assets/portfolio.png'



export const Projects = () => {
  return (
    <div className="container-fluid" >
    <div className="row">
    
        <div className="col-md-12 projectsmain">
          
        
   <div className='col-md-12 heading'> <h1>Projects</h1></div>
   <div className='col-md-12 title1'> <h2>HTML ,CSS And Bootstrap Projects</h2></div>

{/*  */}
   
<div className="col-md-12 projects">
<div class="card col-md-3">
<div className='card-head'> <h2>Job Applicaction Form</h2></div>
  <div className="card-body">
  <img src={job_Applicaction_form} alt=""/>  
  </div>
  <div className='card-footer'><a  className='btn btn-primary' href="https://applicaction-html-css.netlify.app/" >See the project</a></div>
</div>
{/*  */}

<div class="card col-md-3">
<div className='card-head'> <h2>Gym Project</h2></div>
  <div className="card-body">
  <img src={gym} alt=""/>  
  </div>
  <div className='card-footer'><a  className='btn btn-primary' href="https://gym-html-css-project.netlify.app/" >See the project</a></div>
</div>
{/*  */}
<div class="card col-md-3">
<div className='card-head'> <h2>Restaurants project</h2></div>
  <div className="card-body">
  <img src={Restorent_project} alt=""/>  
  </div>
  <div className='card-footer'><a  className='btn btn-primary' href="https://restaurants-html-css-project.netlify.app/" >See the project</a></div>
</div>


        
      </div>
      {/*  */}
      <div className='col-md-12 title2'> <h2>React Project</h2></div>
    {/* 1 */}
      <div className="col-md-12 projects">
<div class="card col-md-3">
<div className='card-head'> <h2>BMI Calulator</h2></div>
  <div className="card-body">
  <img src={bmi_calculator} alt=""/>  
  </div>
  <div className='card-footer'><a  className='btn btn-primary' href="https://bmi-calculator-usereact.netlify.app/" >See the project</a></div>
</div>
{/* 2 */}
<div class="card col-md-3">
<div className='card-head'> <h2>A1  Restaurant  Website</h2></div>
  <div className="card-body">
  <img src={A1restaurant} alt=""/>  
  </div>
  <div className='card-footer'><a  className='btn btn-primary' href="https://restaurant-website-using-reactjs.netlify.app/" >See the project</a></div>
</div>
{/* 3 */}
<div class="card col-md-3">
<div className='card-head'> <h2>Employee Management System</h2></div>
  <div className="card-body">
  <img src={EMS} alt=""/>  
  </div>
  <div className='card-footer'><a  className='btn btn-primary' href="https://employee-management-system-usingreact.netlify.app/" >See the project</a></div>
</div>
{/* 4 */}

<div class="card col-md-3">
<div className='card-head'> <h2>simple interest calculator</h2></div>
  <div className="card-body">
  <img src={simple_interest_calculator} alt=""/>  
  </div>
  <div className='card-footer'><a  className='btn btn-primary' href="https://simpleintrest-caculator.netlify.app/" >See the project</a></div>
</div>
{/*5  */}
<div class="card col-md-3">
<div className='card-head'> <h2>Portfolio</h2></div>
  <div className="card-body">
  <img src={portfolio} alt=""/>  
  </div>
  <div className='card-footer'><a  className='btn btn-primary' href="https://fluffy-bavarois-34be77.netlify.app/" >See the project</a></div>
</div>


        
      </div>
      </div>
      </div>
      </div>
  )
}
