import React from 'react'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getSingleArticle } from '../utils/api'
import {Link} from 'react-router-dom'
function SingleArticle() {
    const [singleArticle, setSingleArticle] = useState([])
    const {article_id} = useParams()
    useEffect(() => {
        getSingleArticle(article_id)
        .then(({data : {article}}) => {
            setSingleArticle(article)
        })
    })
  return (
    <section>
        {singleArticle.length !== 0 ? (
            singleArticle.map((article) =>
            <>
            <h2 key={article.article_id}>{article.title}</h2>
            <Link to={`/articles/${article.topic}`}>{article.topic}
            </Link>
            <br></br>
            <br></br>
            <Link to={`/articles/${article.author}`}>
                {article.author}
            </Link>
            <br></br>
            <br></br>
            <img src={article.article_img_url} alt={article.title}></img>
            <p>{article.body}</p>
            <p> Published : {article.created_at}</p>
            <p>Votes :{article.votes} | Comments: {article.comment_count} </p>
            </>
            )) : (<p> Loading</p>)
        }
    <h2></h2>
    </section>
  )
}
export default SingleArticle