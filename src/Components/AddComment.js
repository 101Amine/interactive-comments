import React from 'react'
import './addComment.css'


export const AddComment = () => {


    const handleSend = () => {

    }


  return (
    <article className='add_comment_container'>
        <div className='avatar_container'>
                <img className='avatar' src='./images/avatars/image-juliusomo.png' alt='avatar' />
        </div>

        <div className='comment_section'>
            <span> Add comment... </span>
        </div>

            


        <div className='btn_section'>
            <button className='btn-inverted' onClick={handleSend} > Send </button>
        </div>
    </article>
  )
}
