import React from 'react'




 function MasonaryPost({ post, tagsOnTop}) {
    const style = {backgroundImage: post.article_img_url}

    return (
        <a className='masonary-post overlay' style={style} href={post.link}>
            <div className='image-text'>
                <div>
                    <img src={post.article_img_url} alt={post.title}></img>
                    <h2 className='image-title'>{post.title}</h2>
                </div>
            </div>
        </a>
    )
}

export default MasonaryPost