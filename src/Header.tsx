import React from 'react';
import AboutMe from './AboutMe';

export type Props = {
  title: string
}

const MyHeader: React.SFC<Props> = ({
  title
}) => (
  <div className="header">
    <h1>{title}</h1>
    <AboutMe />
  </div>
);

export default MyHeader;
