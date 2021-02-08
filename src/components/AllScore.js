import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllScore = (props) => {

  const progress = props.score;
  const getcolor = (progress) =>{
  if (progress < 33)
        {
           const color = "danger";
        }
  else if (progress < 66)
        {
           const color = "info";
        }
  else if (progress >= 33 && progress <= 66)
        {
           const color = "success";
        }
  }
  return (
    <div>
      <ProgressBar 
        style={{width:360, marginTop:-2, marginLeft:125}} 
        now={progress} 
        animated striped variant={getcolor()}
        label={`Total Score ${progress} `} />
    </div>
  );
}

export default AllScore;