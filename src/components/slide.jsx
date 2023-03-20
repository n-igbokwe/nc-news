import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../styles/_slider.scss'



function Slide({allArticles}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      };
  return (
    <div className='slide'>
    <h2> Trending posts</h2>
    <Slider {...settings}>
        {allArticles.map((article) => {
            return (<div className='box'>
                <div className='img'>
                    <img src={article.article_img_url} alt={article.title}/>
            </div>
                <div className='text'>
                <Link className="topic" to={`/topics/${article.topic}`}>
                {article.topic}  
                </Link>
                    <br></br>
                <Link className="title" to={`/articles/${article.article_id}`}>
                {article.title}
                </Link>
            </div>

          </div>
            )
        })}
      
    </Slider>
  </div>
  )
}

export default Slide