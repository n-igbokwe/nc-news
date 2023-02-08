import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { getAllArticles } from '../utils/api';

function SingleTopicPage() {
    const [topicArticles, setTopicArticles] = useState([])

    const {topic} = useParams();

    useEffect(() => {
        getAllArticles()
        .then(({data : {articles}})=> {
            const newArticles = articles.filter((article) => {
                if (article.topic === topic){
                    console.log('here')
                    return {...article}
                }
            })
            setTopicArticles(newArticles)
        })
    }, [])

  return (
    <section>
        <h2>{topic}</h2>
        <ul className="topic-articles">
            {topicArticles.map((article) => {
                return (
                    <li key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}>
                        {article.title}
                    </Link>
                    <br></br>
                    <Link to={`/topics/${article.topic}`}>
                      {article.topic}  
                    </Link>
                    <br></br>
                    <Link to={`/users/${article.author}`}>
                        {article.author}
                    </Link>
                    <br></br>
                    <img src={article.article_img_url} alt={article.title}></img>
                    <p>Votes :{article.votes} | Comments: {article.comment_count} </p>
                    </li>
                )
            })}
        </ul>
    </section>

  )
}

export default SingleTopicPage