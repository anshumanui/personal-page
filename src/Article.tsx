import React from 'react';
import './App.css';

type Props = {
  id?: number;
  content: string;
  title: string;
};

export default class Article extends React.Component<Props> {
  render() {
    const {content, title} = this.props;
    return (
      <div className="article">
        <h2 className="article__title">{title}</h2>
        <div className="article__content">
          <span>{content}</span>
        </div>
    </div>
      )
  };
}