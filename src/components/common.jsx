import React from 'react'
import MasonryPost from './masonary-post'

function PostMasonary ({posts, columns, tagsOnTop}){

    return (
        <section className="masonary" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
            {posts.map((post,index) => 
                <MasonryPost {...{post, index, tagsOnTop, key:index}}/>
            )}
        </section>
    )
}

export default PostMasonary