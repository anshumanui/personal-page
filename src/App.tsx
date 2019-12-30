import React from 'react';
import './App.css';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';
import { Articles, ArticleType } from './types';
import articlesJson from './articles/articles.json';

const articles: Articles = articlesJson

function App() {
  return (
    <React.Fragment>
      <Header
        title="Natalia's space to share and experiment"
        link="Once to be a link to all articles"
      />
      <div className="homepage">

        <div>
          {
            articles.map(article => (
              <div key={article.id}>
                <Article
                  title={article.title}
                  content={article.content}
                />
              </div>
            ))
          }
        </div>

        <Footer
          text="I am a footer"
          link="Once to become a link to the top of the page"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
