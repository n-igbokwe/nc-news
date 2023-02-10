import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { getAllArticles } from '../utils/api';

function SingleTopicPage({sortBy, setSortBy, orderBy, setOrderBy}) {
    const [topicArticles, setTopicArticles] = useState([])
    const [topicErr, setTopicErr] = useState(null)


    const {topic} = useParams();

    useEffect(() => {
        getAllArticles(topic, sortBy, orderBy)
        .then(({data : {articles}})=> {

            const newArticles = articles.filter((article) => {
                if (article.topic === topic){

                    return {...article}
                } 
            })
            setTopicArticles(newArticles)
            if (newArticles.length === 0){
                throw Error ('no articles found')
            }
        })
        .catch((err) => {
            console.log(err)
            setTopicErr(err)
            console.log(topicErr, "<<<")

        })
    }, [topic, sortBy, orderBy] )

    if(topicErr){
        return (
        <section>
            <p> 404 - NO ARTICLES FOUND</p>
        </section>
        )
    }

  return (
    <section>
        <h2>{topic}</h2>
        Sort By:
        <button onClick={() => setSortBy('title')}> title</button>
        <button onClick={() => setSortBy('votes')}> votes</button>
        <button onClick={() => setSortBy('created_at')}> date</button>
        Order:
        <button onClick={() => setOrderBy('asc')}>asending</button>
        <button onClick={() => setOrderBy('desc')}>descending</button>
      
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