import React from 'react';

export type Props = {
  text: string;
  link: string;
}

const Footer: React.SFC<Props> = ({
  link, text
}) => (
  <footer className="footer">
    <p>{text}</p>
    <a href="#">{link}</a>
  </footer>
)

export default Footer;

