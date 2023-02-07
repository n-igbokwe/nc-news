import React from 'react'
import {useEffect, useState} from 'react'
import { getAllArticles } from '../utils/api'
import { Link } from 'react-router-dom'


function Home() {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        getAllArticles()
        .then(({data}) => {
            setAllArticles(data.articles)
        })
    })

  return (
    <main>
    <h2>HOME PAGE : ALL ARTICLES</h2>
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