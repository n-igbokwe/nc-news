import axios from "axios";

const articleAPI = axios.create({
    baseURL: 'https://be-news-api.onrender.com/api/'
})

export const getAllArticles = () => {
    return articleAPI
    .get('/articles')
    .then((data) => {
        return data
    })
}