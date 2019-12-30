import React from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

class AboutMe extends React.Component {
  render() {
    return <Card 
      id="about"
      style={{ width: 900 }}
    >
      <Meta
        avatar={<Avatar src="" />}
        title="About me"
        description="Hi, I'm Natalia! I'm a web developer. I like to organise events and make things happen."
      />
    </Card>
  }
}

export default AboutMe;
