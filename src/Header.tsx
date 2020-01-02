import React from 'react';
import AboutMe from './AboutMe';

export type Props = {
  title: string;
  link?: string;
}

const MyHeader: React.SFC<Props> = ({
  link, title
}) => (
  <div className="header">
    <h1>{title}</h1>
    <a href="#">{link}</a>
    <AboutMe />
  </div>
);

export default MyHeader;
