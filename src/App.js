import { AddComment } from "./Components/AddComment";
import { CommentElement } from "./Components/CommentElement";
import Data from './data.json';
import './App.css'


function App() {

  console.log(Data);

  return (
    <div className="App">
      {Data.comments.map((comment,index) => {
        return (
          <CommentElement comment={comment}/>
        )
      })}
    </div>
  );
}

export default App;
