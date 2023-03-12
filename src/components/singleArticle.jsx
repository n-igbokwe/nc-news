import React from 'react'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { downvoteArticletWithId, getCommeentsWithArticleId, getSingleArticle, upvoteArticletWithId } from '../utils/api'
import {Link} from 'react-router-dom'
import Comments from './comments'
import CommentAdder from './commentAdder'

function  SingleArticle({username}) {

    const [singleArticle, setSingleArticle] = useState([])
    const [articleComments, setArticleComments] = useState([])
    const [articleErr, setArticleErr] = useState(null)
    const {article_id} = useParams()

    useEffect(() => {
        getSingleArticle(article_id)
        .then(({data : {article}}) => {
            setSingleArticle(article)
        })
        .catch((err) => {
          console.log(err)
          setArticleErr(err)
        })
    }, [article_id])

    useEffect(() => {
      getCommeentsWithArticleId(article_id)
      .then(({data : {comments}}) => {
        setArticleComments(comments)
      })
    }, [article_id])

    const upvote = (id) => {
      setSingleArticle((currArticle) => {
        return currArticle.map((article) => {
          if (article.article_id === id){
            return {...article, votes : article.votes + 1}
          }
          return article
        })
      })
      upvoteArticletWithId(article_id)
      .then((data) => {
        console.log(data)
      })
    }

    const downvote = (article_id) => {
      setSingleArticle((currArticle) => {
        return currArticle.map((article) => {
          if (article.article_id === article_id){
            return {...article, votes : article.votes - 1}
          }
          return article
        })
      })
      downvoteArticletWithId(article_id)
      .then((data) => {
        console.log(data)
      })
    }

    if (articleErr){
      return (
        <section>
          <p> 404 - Article Not Found </p>
        </section>
      )
    }

  return (
    <section className='article-post-container'>
        {singleArticle.length !== 0 ? (
            singleArticle.map((article) =>
            <>
            <div className='article-post-data'>
            <h2 className='article-post-title' key={article.article_id}>{article.title}</h2>
            <Link className='data' to={`/topics/${article.topic}`}>Topic: {article.topic}
            </Link>
            <br></br>
            <br></br>
            <div className='article-data'>
                <span>Posted By: {article.author}</span>
                <p className='article-data-spacer'></p>
                <span> 5 min read</span>
            </div>
            <br></br>
            <br></br>
            <img className='img' src={article.article_img_url} alt={article.title}></img>
            <blockquote className='article-body-container'>{article.body}</blockquote>
            <h4> Published : {article.created_at}</h4>
            <h4>Votes :{article.votes} | Comments: {article.comment_count} </h4>
            </div>
            <button onClick={() => upvote(article.article_id)}>UPVOTE</button> | <button onClick={() => downvote(article.article_id)}>DOWNVOTE</button>
            <CommentAdder setArticleComments={setArticleComments} article_id={article_id} username={username}/>
            <section>
              {articleComments.length !== 0 ? (
                articleComments.map((comment) => <Comments key={comment.comment_id} comment={comment} articleComments={articleComments} setArticleComments={setArticleComments} username={username}/>)
              ) : (
                <p>Loading Comments</p>
              )}
            </section>
            </>

            )) : (<p> Loading</p>)
        }
    </section>
  )
}
export default SingleArticle