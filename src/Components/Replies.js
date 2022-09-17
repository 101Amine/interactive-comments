import React from 'react'
import { CommentElement } from './CommentElement';
import './replies.css'

export const Replies = ({replies}) => {

  return (
    <>
    {replies.map((reply, idx) => {
        return (
          <div className='reply_container' key={`reply__id__${idx}`}>
            <hr/>
                <CommentElement width={'50%'} comment={reply} /> 
            </div>
        )
      })
    }
    </>
    //   
         
  )
}
