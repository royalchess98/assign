import React, {useState, useEffect} from 'react'

const Pagination = ({ showPerPage, onPaginChange, total }) => {
    const[counter, setCounter] = useState(1)
    
    let pages = Math.ceil(total/showPerPage);   
    useEffect(() => {
        const value = showPerPage * counter; 
        onPaginChange(value - showPerPage, value);
    },[counter]);
  
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
            if(pages === counter){
                setCounter(counter)
            }
            else{
                setCounter(counter + 1)
            }
        }
    };

    // const [submit, setSubmit] = useState(false)

    // const idSubmit=(e, submit)=>{
    //     // props.updateScore()
    //     setVal(submit);
    //     // console.log(val);
    //     props.onSubmit();
    // }

    return (
        <div className="d-xl-flex flex-row justify-content-around ">
            <button className="btn btn-primary" 
                hidden= {counter === 1 }
                onClick={() => onButtonClick('prev')}>
                Previous
            </button>
            <button className="btn btn-primary" 
            hidden= {counter === pages}   onClick={() => onButtonClick('next')}>
                Next
            </button>
            <button className="btn btn-success "
            hidden= {counter !== pages} >
                         Submit
            </button>
        </div>
    )
}

export default Pagination
