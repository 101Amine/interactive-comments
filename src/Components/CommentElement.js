import React from 'react'
import './comments.css';

export const CommentElement = ({avatar, likes,user, date, comment}) => {
  
  const handleReply = () => {
    console.log('clicked reply')
  }
  
  return (
    <article>
      
        <div className='likes_count'>
            <div> <img className='clickable' src='./images/icon-plus.svg' alt='icon_plus' /> </div>
            <div> {likes} </div>
            <div> <img className='clickable'  src='./images/icon-minus.svg' alt='icon_minus' /></div>
        </div>


        <div className='comment_content'>
            <div className='top_side'>

                <div className='left_side'>
                    <img className='avatar' src='./images/avatars/image-amyrobson.png' alt='avatar' />
                    <h2>{user}</h2>
                    <h3>{date}</h3>
                </div>


                <div className='right_side'>
                    <img className='icon_reply' src='./images/icon-reply.svg' alt='icon_reply'/>

                    <button className='btn clickable' onClick={handleReply} > Reply </button>
                </div>
            </div>

            <div className='bottom_side'>
                  <p>
                    {comment}
                  </p>


            </div>
            
        </div>


    </article>
  )
}
