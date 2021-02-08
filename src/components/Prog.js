import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Prog = (props) => {
  const progress = Math.ceil((props.score/(props.total * 10))*100) ;
  

  let color= "danger"
      
        if (progress > 33 && progress < 66)
          {
            color = "info";
          }
        else if (progress >= 66)
          {
            color = "success";
          }
  
    return (
          <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-8 center">
                  <div>     
                        <ProgressBar 
                          style={{width:360, height:20, marginTop:20}} 
                          now={progress}
                          animated striped variant= {color}
                          label={`Rating ${progress} %`} />
                  </div>
            </div>
          </div>
        </div>      
  )
}


export default Prog



