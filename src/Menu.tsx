import React from 'react';
import {Menu} from 'antd';
import 'antd/dist/antd.css'

class TopMenu extends React.Component {
  state = {
    current: '',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="topMenu">
        <Menu.Item key="about">
          <a href="#about">
            About
          </a>
        </Menu.Item>
        <Menu.Item key="articles">
          Articles
        </Menu.Item>
        <Menu.Item key="events">
          Events
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;