import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Articles } from './types';
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
        <Row gutter={16}>
          <div>
            {
              articles.map(article => (
                <div key={article.id}>
                  <Col span={8}>
                    <Card title={article.title} bordered={false}>
                      <p>{article.content}</p>
                    </Card>
                  </Col>
                </div>
              ))
            }
          </div>
        </Row>
        <Footer
          text="I am a footer"
          link="Once to become a link to the top of the page"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
