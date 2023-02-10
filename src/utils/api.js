import axios from "axios";
const articleAPI = axios.create({
    baseURL: 'https://be-news-api.onrender.com/api/'
})
//ticket 4
export const getAllArticles = (topic, sortBy, orderBy) => {
    return articleAPI
    .get('/articles', {
        params: {
            topic : topic,
            sort_by : sortBy,
            order : orderBy
        }
     })
    .then((data) => {
        return data
    })
}
export const getAllArticlesHome = ( sortBy, orderBy) => {
    return articleAPI
    .get('/articles', {
        params: {
            sort_by : sortBy,
            order : orderBy
        }
     })
    .then((data) => {
        return data
    })
}
//ticket5
export const getSingleArticle = (article_id) => {
    return articleAPI
    .get(`/articles/${article_id}`)
    .then((data) => {
        return data
    })
  
}

//ticket6

export const getCommeentsWithArticleId = (article_id) => {
    return articleAPI
    .get(`/articles/${article_id}/comments`)
    .then((data) => {
        return data
    })
   
}

// ticket7
export const upvoteArticletWithId = (article_id) => {
    return articleAPI
    .patch(`/articles/${article_id}`,
     {inc_votes : 1},
     {headers: {'Content-type' : 'application/json'}})
    .then((data) => {
        return data
    })
   
}

export const downvoteArticletWithId = (article_id) => {
    return articleAPI
    .patch(`/articles/${article_id}`,
     {inc_votes : -1},
     {headers: {'Content-type' : 'application/json'}})
    .then((data) => {
        return data
    })
  
}

//ticket 8 (i got the numbers wrong)
export const postComment = (article_id, user, comment) => {
    const postBody = {username : user,
        comment: comment}
    return articleAPI
    .post(`/articles/${article_id}/comments`, postBody)
    .then((data) => {
        return data
    })
  
}

export const getTopics = () => {
    return articleAPI
    .get(`/topics`)
    .then((data) => {
        return data
    })
    .catch((err)=> {
        console.log(err)
    })
}


export const getUser = () => {
    return articleAPI
    .get(`/users`)
    .then(({data}) => {
        return data
    })
}

export const deleteComment = (comment_id, user) => {
    return articleAPI
    .delete(`comments/${comment_id}`)
    .then(({data}) =>{
        return data
    })
}
