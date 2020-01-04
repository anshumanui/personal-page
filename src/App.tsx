import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TopMenu from './Menu';
import Events from './Events';
import Posts from './Posts';

function App() {
  return (
    <React.Fragment>
      <TopMenu />
      <Header
        title="Natalia's space to share and experiment"
      />
      <div className="homepage">
      <Posts />
      <Events />
        <Footer
          text="Made for fun to learn and share"
          link="Go to the top of the page"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
