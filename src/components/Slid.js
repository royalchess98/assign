import * as React from 'react';
import { Range } from 'react-range';

class Slid extends React.Component {
  state = { values: [1] };
  render() {
    return (
      <Range
        step={1}
        min={1}
        max={10}
        marks
        values={this.state.values}

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