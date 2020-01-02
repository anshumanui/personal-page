import React from 'react';
import './Footer.css'

export type Props = {
  text: string;
  link: string;
}

const MyFooter: React.SFC<Props> = ({
  link, text
}) => (
  <footer className="footer">
    <p>{text}</p>
    <a href="#">{link}</a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nataliavokrouhlecka/"><i className="fab fa-linkedin-in footer-icon"></i></a>
  </footer>
)

export default MyFooter;


