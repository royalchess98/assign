import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllScore = () => {

  const progress = 50;
  return (
    <div>
      <ProgressBar 
        style={{width:360, marginTop:-2, marginLeft:125}} 
        now={progress} animated striped variant="info" label={`Total Score ${progress}% `} />
    </div>
  );
}

export default AllScore;