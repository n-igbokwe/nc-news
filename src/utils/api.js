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
export const getSingleArticle = (article) => {
    return articleAPI
    .get(`/articles/${article}`)
    .then((data) => {
        return data
    })
    .catch((err)=> {
        console.log(err)
    })
}