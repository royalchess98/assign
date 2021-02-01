import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const Prog = () => {
    return (
        <div>
    <ProgressBar  
        percent={50}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <CheckCircleOutlineIcon/>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <CheckCircleOutlineIcon />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <CheckCircleOutlineIcon />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <CheckCircleOutlineIcon />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <CheckCircleOutlineIcon />
          )}
        </Step>
      </ProgressBar>
        </div>
    )
}

export default Prog
