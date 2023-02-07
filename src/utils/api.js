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


























//ticket 8
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