import React from 'react'
import {useEffect, useState} from 'react'
import {  getAllArticlesHome } from '../utils/api'
import { Link } from 'react-router-dom'

import '../styles/_homer.scss'



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
    <main className='container-home'>
    <h3>HOME</h3>
    Sort By:
        <button className='btn' onClick={() => setSortBy('title')}> title</button>
        <button className='btn' onClick={() => setSortBy('votes')}> votes</button>
        <button className='btn' onClick={() => setSortBy('created_at')}> date</button>
        Order:
        <button className='btn' onClick={() => setOrderBy('asc')}>asending</button>
        <button className='btn' onClick={() => setOrderBy('desc')}>descending</button>
    <div classsName='row'> 
    <h4> TRENDING POSTS</h4>
    <ul className='gridcheck'>
        <div className='wrapper'>
    {allArticles.map((article) => {

        return (
            <div className='griddy'>
    <li key={article.article_id} classsName="main-list-items">
        <div className='overlay'>
        <Link className="title" to={`/articles/${article.article_id}`}>
        {article.title}
        </Link>
        <br></br>
        <Link className="topic" to={`/topics/${article.topic}`}>
          {article.topic}  
        </Link>
        <br></br>
        <Link classname="author" to={`/users/${article.author}`}>
            {article.author}
        </Link>
        <br></br>
        </div>
        <img classname="box" src={article.article_img_url} alt={article.title}></img>
        <p>Votes :{article.votes} | Comments: {article.comment_count} </p>
    </li>
    </div>
        )
     })}
     </div>
    </ul>
    </div>
    </main>
    
  )
}

export default Home


// return (
//     <li key={article.article_id} classsName="main-list-items">
//         <div className='overlay'>
//         <Link className="title" to={`/articles/${article.article_id}`}>
//         {article.title}
//         </Link>
//         <br></br>
//         <Link classname="topic" to={`/topics/${article.topic}`}>
//           {article.topic}  
//         </Link>
//         <br></br>
//         <Link to={`/users/${article.author}`}>
//             {article.author}
//         </Link>
//         <br></br>
//         </div>
//         <img classname="box" src={article.article_img_url} alt={article.title}></img>
//         <p>Votes :{article.votes} | Comments: {article.comment_count} </p>
//     </li>