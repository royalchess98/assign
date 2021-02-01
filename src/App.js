import React, {useState} from 'react'
import Slid from './components/Slid'
import Prog from './components/Prog'
import Pagin from './components/Pagination'
import Navbar from './components/Navbar'
import AllScore from './components/AllScore'
import './App.css';

const App = () =>{
  const [ques, setQues] = useState([
    {
      "id": 1,
      "title": "Rate the Hotel"
    },
    {
      "id": 2,
      "title": "Rate the Rooms"
    },
    {
      "id": 3,
      "title": "Rate the Canteen"
    },
    {
      "id": 4,
      "title": "Rate the Food"
    },
    {
      "id": 5,
      "title": "Rate the Travelling"
    },
    {
      "id": 6,
      "title": "Rate the Table"
    },
    {
      "id": 7,
      "title": "Rate the Car"
    },
    {
      "id": 8,
      "title": "Rate the Bike"
    },
    {
      "id": 9,
      "title": "Rate the Places"
    },
    {
      "id": 10,
      "title": "Rate the Staff"
    },
    {
      "id": 11,
      "title": "Rate the Hotel"
    },
    {
      "id": 12,
      "title": "Rate the Rooms"
    },
    {
      "id": 13,
      "title": "Rate the Canteen"
    },
    {
      "id": 14,
      "title": "Rate the Food"
    },
    {
      "id": 15,
      "title": "Rate the Travelling"
    },
    {
      "id": 16,
      "title": "Rate the Table"
    },
    {
      "id": 17,
      "title": "Rate the Car"
    },
    {
      "id": 18,
      "title": "Rate the Bike"
    },
    {
      "id": 19,
      "title": "Rate the Places"
    },
    {
      "id": 20,
      "title": "Rate the Staff"
    },
  ]);

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
                <Slid />                  
              </div>
            </div>
        ))}
        </div>
      <Pagin
            showPerPage={showPerPage} 
            onPaginChange={onPaginChange}
            total= {ques.length}       />
      </div>
    </div>
  )
}

export default App