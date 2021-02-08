import React, {useState} from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackScore = (props) => {
  const progress = Math.ceil((props.score/(props.total * 10))*100) ;
  let color= "danger"
  let feedback = "Bad"    
        if (progress > 33 && progress < 66)
          {
            feedback = "Good"
            color = "warning";
          }
        else if (progress >= 66)
          {
            feedback = "Excellent"
            color = "success";
          }
  
  return (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8 center">
              <div className="card"
                  style={{}}                           
                >
                <div className="card-body">
                  <h3 className="feedback"
                  style={{width:360, height: 30, marginTop:60, marginLeft:165}}                           
                  >Thank you for your feedback </h3>
                  <div>     
                        <ProgressBar 
                          style={{width:360, fontSize:"20px", height: 30, marginTop:60, marginLeft:165}} 
                          now={progress} 
                          animated striped variant={color}
                          label={`${feedback} ${progress} %`} />
                  </div>
                  <div className="d-xl-flex flex-row justify-content-around"
                          style={{width:360, height: 30, marginTop:60, marginLeft:165}} 
                  >
                      <button href="/" className="btn btn-primary">Reset</button>
                      {/* <button href="/" className="btn btn-success">Submit</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
  )
}

export default FeedbackScore



