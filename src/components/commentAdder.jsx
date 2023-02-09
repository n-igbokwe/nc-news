import React from 'react'
import { useState} from 'react'
import { postComment } from '../utils/api';

function CommentAdder({setArticleComments, article_id, username}) {


  const [newComment, setNewComment] = useState([])

  

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, username, newComment)
    .then(({data: {post}}) =>{
      setArticleComments((currComments) => {
        return [post, ...currComments]
      })
    })
    .catch((err) => {
      console.log(err)
    })

  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="comment-adder">
      <p><label htmlFor="comments">Add to the conversation!</label> </p>
      <textarea 
      name="newComment" 
      id="newComment" 
      cols="30" 
      rows="6"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}

      ></textarea>
      <br></br>
      <input type="submit" id="comment-submit" name="comment-submit" value="post"/>
      </form>
      </section>
  )
}

export default CommentAdder


// label> POST
//         <input
//         placeholder='comment'
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}
//         />
//     </label>