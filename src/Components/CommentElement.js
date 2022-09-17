import React from 'react'
import styled from 'styled-components';
import './comments.css';
import Data from '../data.json'

const Comment = styled.article `
    width: ${props => props.width ? props.width : "60%"};

`

export const CommentElement = ({comment,width, CurrentUser}) => {

  
  const handleReply = () => {
    console.log('clicked reply')
  }

  const getConnected = Data.currentUser.username;
  



  return (
    <Comment width={width} className='comment_container'>
      
        <div className='likes_count'>
            <div> <img className='clickable' src='./images/icon-plus.svg' alt='icon_plus' /> </div>
            <div> {comment.score} </div>
            <div> <img className='clickable'  src='./images/icon-minus.svg' alt='icon_minus' /></div>
        </div>


        <div className='comment_content'>
            <div className='top_side'>

                <div className='left_side'>
                    <img className='avatar' src={comment.user.image.png} alt='avatar' />
                    <h2>{comment.user.username} </h2>
                    {/* if it's not the user connected's comment show the icon you */}
                     {comment.user.username === getConnected ?
                    <label> you </label>
                    :
                    null   
                    } 
                    <h3>{comment.createdAt}</h3>
                </div>


                <div className='right_side'>
                  {/* if it's not the user connected's comment show the button delete */}
                  {comment.user.username === getConnected ? 
                    <div className='delete_container'>
                      <img className='icon_delete' src='./images/icon-delete.svg' alt='icon_delete'/>

                      <button className='btn clickable delete_btn' onClick={handleReply} > <span>Delete</span> </button>
                    </div>
                    :
                    null 
                    } 
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


    </Comment>
  )
}
