import React from 'react'
import {useEffect, useState} from 'react'
import {  getAllArticlesHome } from '../utils/api'
import { Link } from 'react-router-dom'


function Home({sortBy, setSortBy, orderBy, setOrderBy}) {
    const [allArticles, setAllArticles] = useState([])


    useEffect(() => {
        getAllArticlesHome(sortBy, orderBy)
        .then(({data : {articles}}) => {
            setAllArticles(articles)
        })
        .catch((err) => {
            console.log(err);
            // setHomeErr(err);
        })
    }, [sortBy, orderBy])

  return (
    <main>
    <h2>HOME PAGE : ALL ARTICLES</h2>
    Sort By:
        <button onClick={() => setSortBy('title')}> title</button>
        <button onClick={() => setSortBy('votes')}> votes</button>
        <button onClick={() => setSortBy('created_at')}> date</button>
        Order:
        <button onClick={() => setOrderBy('asc')}>asending</button>
        <button onClick={() => setOrderBy('desc')}>descending</button>
    <ul className="all-articles-list">
        {allArticles.map((article) => {
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
    </main>
    
  )
}

export default Home