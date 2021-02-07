import React, {useState} from 'react'
// import Slid from './components/Slid'
import Slides from './components/Slides'
import Prog from './components/Prog'
import Pagin from './components/Pagination'
import Navbar from './components/Navbar'
import AllScore from './components/AllScore'
import './App.css';

const App = (props) =>{
  const [ques, setQues] = useState([
    {
      "id": 1,
      "Score": 1,
      "title": "Rate the Hotel"
    },
    {
      "id": 2,
      "Score": 2,
      "title": "Rate the Rooms"
    },
    {
      "id": 3,
      "Score": 3,
      "title": "Rate the Canteen"
    },
    {
      "id": 4,
      "Score": 4,
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
      "title": "Rate the Hotel"
    },
    {
      "id": 12,
      "Score": 1,
      "title": "Rate the Rooms"
    },
    {
      "id": 13,
      "Score": 1,
      "title": "Rate the Canteen"
    },
    {
      "id": 14,
      "Score": 1,
      "title": "Rate the Food"
    },
    {
      "id": 15,
      "Score": 1,
      "title": "Rate the Travelling"
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


  const handleSlider = (val) => {
    console.log(val)
  };

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
      <Navbar />
      <div className="container py-0">
          <div className="row">
              <div className="col-md-6 mt-5 center">
                  <Prog />
              </div>
              <div className="col-md-6 mt-5 center">
                  <AllScore />
              </div>
          </div>
      </div>
      <div className="container py-2">
        <div className="row">
          {ques.slice(pagin.start, pagin.end).map((question) => (
            <div className="col-md-4 mb-4" key={question.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="question">{question.id}. {question.title}</h5>
                </div>
                <Slides score= {question.Score} onChangeSlider={handleSlider}/>                  
              </div>
            </div>
        ))}
        </div>
      <Pagin
            showPerPage={showPerPage} 
            onPaginChange={onPaginChange}
            total= {ques.length}       
            />
      </div>
    </div>
  )
}

export default App