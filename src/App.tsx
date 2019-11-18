import React from 'react';
import './App.css';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="homepage">
      <Header 
        title="Natalia's space to share and experiment"
        link="Once to be a link to all articles"
      />
      <Article 
        title="My favourite podcasts"
        content="My favourite podcasts Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. Aliquam erat volutpat. Nullam faucibus mi quis velit. Vestibulum fermentum tortor id mi. Duis pulvinar. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam ante. Vivamus porttitor turpis ac leo. Maecenas aliquet accumsan leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." 
        />
      <Article 
        title="Article on Kids Academy to come"
        content="Kids Academy Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. Aliquam erat volutpat. Nullam faucibus mi quis velit. Vestibulum fermentum tortor id mi. Duis pulvinar. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam ante. Vivamus porttitor turpis ac leo. Maecenas aliquet accumsan leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        " 
        />
      <Article 
        title="Article on Code Retreat to come"
        content="Kids Academy Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. Aliquam erat volutpat. Nullam faucibus mi quis velit. Vestibulum fermentum tortor id mi. Duis pulvinar. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam ante. Vivamus porttitor turpis ac leo. Maecenas aliquet accumsan leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        " 
        />
      <Footer 
        text="I am a footer"
        link="Once to become a link to the top of the page"
      />
    </div>
  );
}

export default App;
