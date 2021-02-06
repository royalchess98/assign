import * as React from 'react';
import { Slider } from '@material-ui/core'

class Slid extends React.Component {
  state = { values: [1] };
  render() {
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
        defaultValue={1}
        values={this.state.values}
        valueLabelDisplay='auto'
        onChange={(values) => this.setState({ values })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              margin: '20px auto',
              height: '6px',
              width: '90%',
              backgroundColor: '#ccc'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '24px',
              width: '24px',
              border:'2px solid #9FE2BF',
              borderRadius:'40px',
              backgroundColor: '#E9967A'
            }}
          />
        )}
      />
    );
  }
}

export default Slid