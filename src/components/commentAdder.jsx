import React from 'react'
import { useState} from 'react'
import { postComment } from '../utils/api';

function CommentAdder({setArticleComments, article_id, username}) {


  const [newComment, setNewComment] = useState([])
  const [username, setUsername] = useState('tickle122')
  const [clicked, setClicked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, username, newComment)
    .then(({data : {post}}) =>{
      setArticleComments((currComments) => {
        return [post, ...currComments]
      })
      setClicked(false)
      setNewComment('')
    })
    .catch((err) => {
      setClicked(false)
    })

  }

 

  return (
    <section>
      { clicked === false ? <form onSubmit={handleSubmit} className="comment-adder">
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
      <input type="submit" id="comment-Submit" name="commentSubmit" value="post"/>
      </form> 
       : <form onSubmit={handleSubmit} className="comment-adder">
       <p><label htmlFor="comments">Add to the conversation!</label> </p><textarea disabled
      name="newComment" 
      id="newComment" 
      cols="30" 
      rows="6"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}

      ></textarea>
      <br></br>
      <input type="submit" id="comment-Submit" name="commentSubmit" value="posting"/>
      </form>   }
     
    

      </section>
  )
}

export default CommentAdder

