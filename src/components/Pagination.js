import React, {useState, useEffect} from 'react'

const Pagination = ({ showPerPage, onPaginChange, total }) => {
    const[counter, setCounter] = useState(1)

    useEffect(() => {
        const value = showPerPage * counter;    
        onPaginChange(value - showPerPage, value);
    },[counter]);

    // const onSubmit = () =>{

    // }

    const onButtonClick = (type) => {
        if (type === "prev")
        {
            if (counter === 1){
                setCounter(1)
            }
            else{
                setCounter(counter - 1)
            }
        } else if (type === "next"){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter)
            }
            else{
                setCounter(counter + 1)
            }
        }
    };
    return (
        <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={() => onButtonClick('prev')}>
                Previous
            </button>
            <button className="btn btn-primary" onClick={() => onButtonClick('next')}>
                Next
            </button>
            {/* <button className="btn btn-primary" onClick={() => onSubmit()}>
                Submit
            </button> */}
        </div>
    )
}

export default Pagination
