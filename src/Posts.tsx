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
        <Row gutter={16}>
          <div>
            {
              articles.map(article => (
                <div key={article.id}>
                  <Col span={8}>
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