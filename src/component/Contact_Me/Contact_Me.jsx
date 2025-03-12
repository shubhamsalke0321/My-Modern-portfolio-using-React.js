 import React, { useRef } from 'react';
import './Contact_Me.css'
import emailjs from '@emailjs/browser';

export const Contact_Me = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6aomx5e', 'template_b8w56xc', form.current, {
        publicKey: 'vvrsXpZI3Y08bodov',
      })
      .then(
        () => {
          console.log('SUCCESS!');
     
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
     <div className="container-fluid  Contact_Me">
    <div className="row">
      <div className='col-md-8 Contact_Me_2'>
     
      <h4 className=" p-4 text-center ">Contact</h4>
     
      <form action='' className='' ref={form} onSubmit={sendEmail}>
        
          <div className="row">
            {/* ******************************* */}
            <div className="col-md-12 ">
              <div className="form-Group">
                <label className="fw-bold" style={{ fontSize:"25px"}} >Enter Your Name</label>
                <br/>
                <input type="text" className="form-control" placeholder='Enter Your Name' id='name' name='user_name' />
              </div>
            </div>
            {/* ********************************************* */}
      
             <div className="col-md-12">
              <div className="form-Group">
                <label className="fw-bold" style={{ fontSize:"25px"}} >Enter Your Email</label>
                <br/>
                <input type="email" className="form-control" placeholder='Enter Your Email'  id='email' name='user_email' />
              </div>
            </div>
            
             {/* ******************************* */}
             <div className="col-md-12">
              <div className="form-Group">
                <label className="fw-bold" style={{ fontSize:"25px"}} >Enter Your Message</label>
                <br/> 
                <textarea     input type="" className="form-control" placeholder='Message' id='skill' name='message' />
              </div>
            </div>
            {/* *********************************************************** */}
        
        <div className="col-md-12 text-center p-5">
            <button className="btn btn-danger" type="submit" value="Send">Submit </button>
            
        </div>
        
            {/* *********************************************************** */}

          </div>
      
      </form>
      </div>
    </div>
  </div>
  {/* Footer */}
  <div className="container-fluid" style={{backgroundColor:'gray'}}>
    <div className="row">
      <div className='col-md-12 footer'>

        <div className='col-md-6 bg-danger icon'>
       
     
        
        </div>
        
        </div>
        </div>
        </div>
  

    </>
  )
}
