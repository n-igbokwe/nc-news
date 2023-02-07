import React from 'react'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getCommeentsWithArticleId, getSingleArticle } from '../utils/api'
import {Link} from 'react-router-dom'

function SingleArticle() {

    const [singleArticle, setSingleArticle] = useState([])
    const [articleComments, setArticleComments] = useState([])
    const {article_id} = useParams()

    useEffect(() => {
        getSingleArticle(article_id)
        .then(({data : {article}}) => {
            setSingleArticle(article)
        })
    })

    useEffect(() => {
      getCommeentsWithArticleId(article_id)
      .then(({data : {comments}}) => {
        setArticleComments(comments)
      })
    })
  return (
    <section>
        {singleArticle.length !== 0 ? (
            singleArticle.map((article) =>
            <>
            <h2 key={article.article_id}>{article.title}</h2>
            <Link to={`/articles/${article.topic}`}>Topic: {article.topic}
            </Link>
            <br></br>
            <br></br>
            <Link to={`/articles/${article.author}`}>
                Posted By: {article.author}
            </Link>
            <br></br>
            <br></br>
            <img src={article.article_img_url} alt={article.title}></img>
            <h3>{article.body}</h3>
            <h4> Published : {article.created_at}</h4>
            <h4>Votes :{article.votes} | Comments: {article.comment_count} </h4>
            <ul className='comments-section'>
            {articleComments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  Author: {comment.author} | Votes: {comment.votes} | Created at: {comment.created_at}
                  <br></br>
                  {comment.body}
                  <br></br>
                  <br></br>
                </li>
              )
            })}
            </ul>
            </>

            )) : (<p> Loading</p>)
        }
    </section>
  )
}
export default SingleArticle