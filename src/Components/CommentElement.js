import React from 'react'
import './comments.css';

export const CommentElement = ({comment}) => {
  
  const handleReply = () => {
    console.log('clicked reply')
  }

  console.log(comment)
  
  return (
    <article>
      
        <div className='likes_count'>
            <div> <img className='clickable' src='./images/icon-plus.svg' alt='icon_plus' /> </div>
            <div> {comment.score} </div>
            <div> <img className='clickable'  src='./images/icon-minus.svg' alt='icon_minus' /></div>
        </div>


        <div className='comment_content'>
            <div className='top_side'>

                <div className='left_side'>
                    <img className='avatar' src={comment.user.image.png} alt='avatar' />
                    <h2>{comment.user.username}</h2>
                    <h3>{comment.createdAt}</h3>
                </div>


                <div className='right_side'>
                    <img className='icon_reply' src='./images/icon-reply.svg' alt='icon_reply'/>

                    <button className='btn clickable' onClick={handleReply} > Reply </button>
                </div>
            </div>

            <div className='bottom_side'>
                  <p>
                    {comment.content}
                  </p>


            </div>
            
        </div>


    </article>
  )
}
