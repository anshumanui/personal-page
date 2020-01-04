import React from 'react';
import { Card, Col, Row } from 'antd';
import articlesJson from './articles/articles.json';
import { Articles } from './types';
import './Posts.css'

const articles: Articles = articlesJson

class Posts extends React.Component {

  render() {
    return (
      <div id="posts" className="posts">
        <h2 className="posts-header">I write about the topics I find interesting and want to share my thoughts on them with others.</h2>
        <Row gutter={[8, 8]}>
          <div>
            {
              articles.map(article => (
                <div key={article.id}>
                  <Col xs={{ span: 22, offset: 1 }} sm={{span: 12, offset: 1 }} md={{span: 10, offset: 1}} lg={{ span: 10, offset: 1}}>
                    <Card title={article.title} bordered={false} className="posts-post">
                      <p>{article.content}</p>
                    </Card>
                  </Col>
                </div>
              ))
            }
          </div>
        </Row>
      </div>
    )
  }
}

export default Posts;