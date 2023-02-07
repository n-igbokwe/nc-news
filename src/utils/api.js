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

// ticket7
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