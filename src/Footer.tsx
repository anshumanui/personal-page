import React from 'react';
import './Footer.css'

export type Props = {
  text: string;
  link: string;
}

const MyFooter: React.SFC<Props> = ({
  link, text
}) => (
  <footer className="footer" role="contentinfo">
    <p>{text}</p>
    <a className="footer-link" href="#top-menu">{link}</a>
    <a className="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nataliavokrouhlecka/" aria-label="Go to Natalia's LinkedIn profile"><i className="fab fa-linkedin-in footer-icon"></i></a>
  </footer>
)

export default MyFooter;


