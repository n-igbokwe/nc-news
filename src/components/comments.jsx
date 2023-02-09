import React from 'react'
import { deleteComment } from '../utils/api'



function Comments({comment, setArticleComments, username}) {


  

//this only changes comment votes on the site and not AP

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
    <section>
        <ul className="comments-section">
        <li>
         Author: {comment.author} | Votes: {comment.votes} | Created at: {comment.created_at}
         <br></br>
        {comment.body}
        <br></br>
        <br></br>
        <button onClick={() => upvote(comment.comment_id)}>UPVOTE</button> | <button onClick={() => downvote(comment.comment_id)}>DOWNVOTE</button> |  
         { username === comment.author ? <button onClick={() => deleter(comment.comment_id, comment.author)}>DELETE</button> : <></>}
        </li>
        </ul>
    </section>
  )
}

export default Comments