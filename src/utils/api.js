import axios from "axios";
const articleAPI = axios.create({
    baseURL: 'https://be-news-api.onrender.com/api/'
})
//ticket 4
export const getAllArticles = () => {
    return articleAPI
    .get('/articles')
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
    .catch((err)=> {
        console.log(err)
    })
}

//ticket6

export const getCommeentsWithArticleId = (article_id) => {
    return articleAPI
    .get(`/articles/${article_id}/comments`)
    .then((data) => {
        return data
    })
    .catch((err)=> {
        console.log(err)
    })
}



export const upvoteArticletWithId = (article_id) => {
    return articleAPI
    .patch(`/articles/${article_id}`,
     {inc_votes : 1},
     {headers: {'Content-type' : 'application/json'}})
    .then((data) => {
        return data
    })
    .catch((err) => {
        console.log(err)
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
    .catch((err) => {
      console.log(err)
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

//ticket 8 (i got the numbers wrong)
export const postComment = (article_id, user, comment) => {
    const postBody = {username : user,
        comment: comment}
    return articleAPI
    .post(`/articles/${article_id}/comments`, postBody)
    .then((data) => {
        return data
    })
    .catch((err) => {
        console.log(err)
    })
}

// REMOVE CATHC BLOCKS FROM API UTLS FILES ^^^^^^ CATCH BLOCK IS HALWAY THROUGH PROMISE CHAIN AND THAT IS DUMB