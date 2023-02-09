import React from 'react'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { downvoteArticletWithId, getCommeentsWithArticleId, getSingleArticle, upvoteArticletWithId } from '../utils/api'
import {Link} from 'react-router-dom'
import Comments from './comments'
import CommentAdder from './commentAdder'

function SingleArticle() {

    const [singleArticle, setSingleArticle] = useState([])
    const [articleComments, setArticleComments] = useState([])
    const {article_id} = useParams()

    useEffect(() => {
        getSingleArticle(article_id)
        .then(({data : {article}}) => {
            setSingleArticle(article)
        })
        .catch((err) => {
          console.log(err)
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


  return (
    <section>
        {singleArticle.length !== 0 ? (
            singleArticle.map((article) =>
            <>
            <h2 key={article.article_id}>{article.title}</h2>
            <Link to={`/topics/${article.topic}`}>Topic: {article.topic}
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
            <button onClick={() => upvote(article.article_id)}>UPVOTE</button> | <button onClick={() => downvote(article.article_id)}>DOWNVOTE</button>
            <CommentAdder setArticleComments={setArticleComments} article_id={article_id}/>
            <section>
              {articleComments.length !== 0 ? (
                articleComments.map((comment) => <Comments key={comment.comment_id} comment={comment} articleComments={articleComments} setArticleComments={setArticleComments}/>)
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