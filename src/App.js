import { AddComment } from "./Components/AddComment";
import { CommentElement } from "./Components/CommentElement";
import Data from './data.json';
import './App.css'
import { Replies } from "./Components/Replies";
import { useEffect } from "react";


function App() {

  return (
    <div className="App">
      {Data.comments.map((comment,index) => {
        return (
          <>
          <CommentElement width={'63%'} comment={comment} />
          { comment.replies.length > 0 && 
            <Replies replies={comment.replies} />
          
          }

          

          
          </>
        )
      })}

        <AddComment/>

    </div>
  );
}

export default App;
