import React from 'react'
import './Education.css'

export const Education = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 Education">
      <h1>Education</h1>
    <ul>
      <li>
        <div className="date">2019</div>
        <div className="title">SSC</div>
        <div className="descr"> Maharashtra State Board <br/>Shree Dharmnath Vidyalay Jawala ,parner<br/>Percentage : 71.80 %
        </div>
      </li>
      <li>
        <div className="date">2021</div>
        <div className="title">HSC</div>
        <div className="descr">Maharashtra State Board<br/>
Chandmal Tarachand Bora College ,Shirur <br/>
Percentage : 71.17 %
</div>
      </li>
      <li>
        <div className="date">2024</div>
        <div className="title">BSC(Computer Science)</div>
        <div className="descr">Savitribai Phule Pune University<br/>
Chandmal Tarachand Bora College ,Shirur<br/>
CGPA : 7.19</div>
      </li>
      <li>
        <div className="date">june 2024 to january 2025</div>
        <div className="title">MERN Stack Trening Course</div>
        <div className="descr">I've Learning a Frontend Technology's like HTML, CSS, JavaScript, Bootstrap, and React.Js and Meteriel Ui ,nodejs,mongodb,expressjs.</div>
      </li>
      {/* <li >
        <div className="date">2022</div>
        <div className="title">Title 5</div>
        <div className="descr">Lorem, ipsum dolor sit amet consectet</div>
      </li> */}
    </ul>
   </div>
        </div>
        </div>
        
  )
}
