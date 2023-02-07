import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { getTopics } from '../utils/api'


function TopicsPage() {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics()
        .then(({data : {topics}}) => {
            setTopics(topics)

        })
    }, [])


  return (
    <section>
        <p>
            {topics.map((topic, index) => {
                return (
                    <> 
                    <h3 key={index}>
                        <Link to={`/topics/${topic.slug}`}>
                        {topic.slug}
                        </Link>
                    </h3>
                    <p> {topic.description}</p>
                    </>
                )
            })}
        </p>
    </section>

  )
}

export default TopicsPage