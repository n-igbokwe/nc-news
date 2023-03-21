import React from 'react'
import { deleteComment } from '../utils/api'
import '../styles/_comments.scss'



function Comments({comment, setArticleComments, username}) {


    const upvote = (id) => {
        setArticleComments((currComments) => {
            return currComments.map((comment) => {
                if (comment.comment_id === id){
                    return {...comment, votes: comment.votes + 1}
                }
                return comment
            })
        })
    }

    const downvote = (id) => {
        setArticleComments((currComments) => {
            return currComments.map((comment) => {
                if (comment.comment_id === id){
                    return {...comment, votes: comment.votes - 1}
                }
                return comment
            })
        })

    }

    const deleter = (id, author) => {
        
        if (author === username){
            setArticleComments((currComments) => {
                return currComments.filter((comment) => {
                    if (comment.comment_id !== id){
                        return {...comment}
                    }
                })
            })
            deleteComment(id)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }



  return (
    <div class="comment">

  <div class="comment-heading">

    <div class="comment-info">
      <p class="comment-author">{comment.author}</p>
      <p>
        {comment.votes} • {comment.created_at}
      </p>
    </div>
  </div>



  <div class="comment-body">
    <p>
      {comment.body}
    </p>

    <button onClick={() => upvote(comment.comment_id)}>UPVOTE</button> 
    <button onClick={() => downvote(comment.comment_id)}>DOWNVOTE</button>
    { username === comment.author ? <button onClick={() => deleter(comment.comment_id, comment.author)}>DELETE</button> : <></>}
  </div>



  <div class="replies">

  </div>


</div>
  )
}

export default Comments