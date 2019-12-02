import React from 'react';
import './App.css';

export type Props = {
  content: string;
  title: string;
};

const Article: React.SFC<Props> = ({
  content, 
  title}) => (
    <div className="article">
      <h2 className="article__title">{title}</h2>
      <div className="article__content">
      <span>{content}</span>
      </div>
    </div>
  )

export default Article;
