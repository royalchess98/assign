import React, {useState} from 'react';
import { Slider } from '@material-ui/core'

const Slides = (props) => {
    
  const [val, setVal]= useState(props.Score)
    
    // console.log(val)
    const updateVal=(e, val)=>{
        // props.updateScore()
        // console.log(val);
        props.onChangeSlider(val);
    }

    return (
      <Slider style={{width:260, marginTop:21 ,marginBottom:50, marginLeft:35}}
        step={1}
        min={1}
        max={10}
        marks
        value={val}
        defaultValue={props.score}
        valueLabelDisplay='auto'
        onChangeCommitted={updateVal}
      />
    );
    }

export default Slides