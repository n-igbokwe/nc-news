
import './App.css';
import ArticleContainer from './components/articleContainer';
import Header from './components/header';
import Home from './components/home';
import Navbar from './components/navbar';
import SingleArticle from './components/singleArticle';
import User from './components/user';
import {Route, Routes} from 'react-router-dom'
import TopicsPage from './components/topicsPage';
import SingleTopicPage from './components/singleTopicPage';
import {useState} from 'react'

function App() {
  const [sortBy, setSortBy] = useState('title')
  const [orderBy, setOrderBy] = useState('desc')
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home sortBy={sortBy} setOrderBy={setOrderBy} setSortBy={setSortBy} orderBy={orderBy}/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle/>}></Route>
        <Route path="/articles/:topic" element={<ArticleContainer/>}></Route>
        <Route path="/users/:user_id" element={<User/>}></Route>
          {/* //path=/* is a wild card and matches anything not specified */}
        <Route path="/topics" element={<TopicsPage/>}></Route>
        <Route path="/topics/:topic" element={<SingleTopicPage sortBy={sortBy} setOrderBy={setOrderBy} setSortBy={setSortBy} orderBy={orderBy}/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
