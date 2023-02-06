
import './App.css';
import ArticleContainer from './components/articleContainer';
import Header from './components/header';
import Home from './components/home';
import Navbar from './components/navbar';
import SingleArticle from './components/singleArticle';
import User from './components/user';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle/>}></Route>
        <Route path="/articles/:topic" element={<ArticleContainer/>}></Route>
        <Route path="/users/:user_id" element={<User/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
