import React from 'react';

export type Props = {
  title: string;
  link?: string;
}

const Header: React.SFC<Props> = ({
  link, title
}) => (
  <div className="header">
    <h1>{title}</h1>
    <a href="#">{link}</a>
  </div>
);

export default Header;
