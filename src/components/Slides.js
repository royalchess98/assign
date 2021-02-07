import React, {useState} from 'react';
import { Slider } from '@material-ui/core'

const Slides = (props) => {
    
  const [val, setVal]= useState(props.Score)
    
    // console.log(val)
    const updateVal=(e, val)=>{
        // props.updateScore()
        setVal(val);
        // console.log(val);
        props.onChangeSlider(val);
    }
    const marks = [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
      {
        value: 4,
        label: '4',
      },
      {
        value: 5,
        label: '5',
      },
      {
        value: 6,
        label: '6',
      },
      {
        value: 7,
        label: '7',
      },
      {
        value: 8,
        label: '8',
      },
      {
        value: 9,
        label: '9',
      },
      {
        value: 10,
        label: '10',
      },
   ];
    return (
      <Slider style={{width:260, marginTop:21 ,marginBottom:50, marginLeft:35}}
        step={1}
        min={1}
        max={10}
        marks={marks}
        value={val}
        defaultValue={props.score}
        valueLabelDisplay='auto'
        onChangeCommitted={updateVal}
      />
    );
    }

export default Slides