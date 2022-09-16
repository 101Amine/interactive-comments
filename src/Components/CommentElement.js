import React from 'react'
import './comments.css';

export const CommentElement = ({img, user, date, comment}) => {
  
  const handleReply = () => {
    console.log('clicked reply')
  }
  
  return (
    <article>
      
        <div className='likes_count'>
            <div> <img className='clickable' src='./images/icon-plus.svg' alt='icon_plus' /> </div>
            <div> 12 </div>
            <div> <img className='clickable'  src='./images/icon-minus.svg' alt='icon_minus' /></div>
        </div>


        <div className='comment_content'>
            <div className='top_side'>

                <div className='left_side'>
                    <img className='avatar' src='./images/avatars/image-amyrobson.png' alt='avatar' />
                    <h2>amyrobson</h2>
                    <h3>1 month ago</h3>
                </div>


                <div className='right_side'>
                    <img className='icon_reply' src='./images/icon-reply.svg' alt='icon_reply'/>

                    <button className='btn clickable' onClick={handleReply} > Reply </button>
                </div>
            </div>

            <div className='bottom_side'>
                  <p>
                    Impressive! though it seems the drag feature could be improved, But overall it looks incredible, You've nailed the design and the responsiveness at various breakpoints works really well. 
                  </p>


            </div>
            
        </div>


    </article>
  )
}
