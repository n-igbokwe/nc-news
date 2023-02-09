import React from 'react'



function Comments({comment, setArticleComments}) {
  

//this only changes comment votes on the site and not API

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

  return (
    <section>
        <ul className="comments-section">
        <li>
         Author: {comment.author} | Votes: {comment.votes} | Created at: {comment.created_at}
         <br></br>
        {comment.body}
        <br></br>
        <br></br>
        <button onClick={() => upvote(comment.comment_id)}>UPVOTE</button> | <button onClick={() => downvote(comment.comment_id)}>DOWNVOTE</button>
        </li>
        </ul>
    </section>
  )
}

export default Comments