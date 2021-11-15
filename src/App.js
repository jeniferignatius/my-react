import React, { Component } from 'react';
import HomePage from "./Pages/HomePage";
import Article from "./Pages/Article";
import AboutPage from "./Pages/AboutPage";
import ArticleList from "./Pages/ArticleList";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./App.css";

class App extends Component {
  render(){
    return (
       <Router>
          <div className="App">
            <NavBar/>
            <div id = "page-body">
              <Routes>
                <Route path="/" element={<HomePage/>} exact />
                <Route path="/article" element={<Article/>} exact />
                <Route path="/articlelist" element={<ArticleList/>} exact />
                <Route path="/about" element={<AboutPage/>} exact />

              </Routes>
            </div>
          </div> 
      </Router>
  
   );
 }
}

export default App;
