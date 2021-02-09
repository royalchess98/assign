import React, {useState} from 'react'
import Slides from './components/Slides'
import Pagin from './components/Pagination'
import Navbar from './components/Navbar'
import Prog from './components/Prog'
import './App.css';
import FeedbackScore from './components/FeedbackScore'

const App = (props) =>{

  // created dummy questions array
  
  const [ques,updateMyArray] = useState([
    {
      "id": 1,
      "Score": 1,
      "title": "Rate the Hotel"
    },
    {
      "id": 2,
      "Score": 1,
      "title": "Rate the Rooms"
    },
    {
      "id": 3,
      "Score": 1,
      "title": "Rate the Canteen"
    },
    {
      "id": 4,
      "Score": 1,
      "title": "Rate the Food"
    },
    {
      "id": 5,
      "Score": 1,
      "title": "Rate the Travelling"
    },
    {
      "id": 6,
      "Score": 1,
      "title": "Rate the Table"
    },
    {
      "id": 7,
      "Score": 1,
      "title": "Rate the Car"
    },
    {
      "id": 8,
      "Score": 1,
      "title": "Rate the Bike"
    },
    {
      "id": 9,
      "Score": 1,
      "title": "Rate the Places"
    },
    {
      "id": 10,
      "Score": 1,
      "title": "Rate the Staff"
    },
    {
      "id": 11,
      "Score": 1,
      "title": "Rate the Table"
    },
    {
      "id": 12,
      "Score": 1,
      "title": "Rate the Car"
    },
    {
      "id": 13,
      "Score": 1,
      "title": "Rate the Bike"
    },
    {
      "id": 14,
      "Score": 1,
      "title": "Rate the Places"
    },
    {
      "id": 15,
      "Score": 1,
      "title": "Rate the Staff"
    },
    {
      "id": 16,
      "Score": 1,
      "title": "Rate the Table"
    },
    {
      "id": 17,
      "Score": 1,
      "title": "Rate the Car"
    },
    {
      "id": 18,
      "Score": 1,
      "title": "Rate the Bike"
    },
    {
      "id": 19,
      "Score": 1,
      "title": "Rate the Places"
    },
    {
      "id": 20,
      "Score": 1,
      "title": "Rate the Staff"
    },
  ]);
  // created the hook to manage slider data
  const [totalScore, updateTotalScore] = useState(0); 
  const handleSlider = (id, val) => {
    console.log(val);
    let tempScore = 0
    const newList = ques.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          Score: val,
        };
        tempScore = tempScore+ item.Score
        return updatedItem;
      }
      tempScore = tempScore+ item.Score
      return item;
    });
    // updation of array
    updateTotalScore(tempScore);
    updateMyArray(newList);
  }


  // const handleSlider = (val) => {
  //   console.log(val);
  //   // updateMyArray([...ques,{
  //   //   id: ques.id,
  //   //   value:val
  //   // }])
  //   let arr[ ] = 
  // };

  //Created the pagination for as per 5 pages per page
  const [showPerPage, setShowPerPage] = useState(5);

  const [pagin, setPagin] = useState({
    start: 0,
    end: showPerPage,
  })

  const onPaginChange = (start, end) => {
    setPagin({ start:start, end:end })
  }

  return(
    <div className="App">
    {/*Navbar*/}
      <Navbar />
      {/* ProgressBar */}
       <div className="container py-0">
          <div className="row justify-content-md-center">
              <div className="col-md-6">
                  <Prog score={totalScore} total= {ques.length}/>
              </div>
              {/* <div className="col-md-6 mt-5 center">
                  <AllScore score= {totalScore} />
              </div> */}
          </div>
      </div> 

      {/* Card container for showing questions and sliders */}
      <div className="container py-1">
        <div className="row">
          {ques.slice(pagin.start, pagin.end).map((question) => (
            <div className="col-md-4 mb-3" key={question.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="question">{question.id}. {question.title}</h5>
                </div>
                <Slides 
                    score= {question.Score} 
                    id={question.id} 
                    onChangeSlider={handleSlider}/>                  
              </div>
            </div>
        ))}
        </div>
      {/* Pagination Buttons  UI */}
      <Pagin
            showPerPage={showPerPage} 
            onPaginChange={onPaginChange}
            total= {ques.length}     
            // onSubmitted={handleSubmit}  
            />
      </div>
      {/* Feedback submited score Card */}
      <FeedbackScore 
          score={totalScore} 
          total= {ques.length}/>
    </div>
  )
}

export default App