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
      "userId": 1,
      "id": 1,
      "title": "Rate the Hotel"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Rate the Rooms"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Rate the Canteen"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "Rate the Food"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "Rate the Travelling"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "Rate the Table"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "Rate the Car"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "Rate the Bike"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "Rate the Places"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "Rate the Staff"
    },
    {
      "userId": 2,
      "id": 11,
      "title": "et ea vero quia laudantium autem"
    },
    {
      "userId": 2,
      "id": 12,
      "title": "in quibusdam tempore odit est dolorem"
    },
    {
      "userId": 2,
      "id": 13,
      "title": "dolorum ut in voluptas mollitia et saepe quo animi"
    },
    {
      "userId": 2,
      "id": 14,
      "title": "voluptatem eligendi optio"
    },
    {
      "userId": 2,
      "id": 15,
      "title": "eveniet quod temporibus"
    },
    {
      "userId": 2,
      "id": 16,
      "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio"
    },
    {
      "userId": 2,
      "id": 17,
      "title": "fugit voluptas sed molestias voluptatem provident"
    },
    {
      "userId": 2,
      "id": 18,
      "title": "voluptate et itaque vero tempora molestiae"
    },
    {
      "userId": 2,
      "id": 19,
      "title": "adipisci placeat illum aut reiciendis qui"
    },
    {
      "userId": 2,
      "id": 20,
      "title": "doloribus ad provident suscipit at"
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