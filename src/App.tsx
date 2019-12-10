import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css'
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header
        title="Natalia's space to share and experiment"
        link="Once to be a link to all articles"
      />
      <div className="homepage">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="My favourite podcasts" bordered={false}>
                Front End Happy Hour is a podcast for people interested in various areas connected to front end. On every episodes there are a few panelists - some of them are regularly on the show and there are guests too. Most of the panelists work in Netflix and the guests come from different companies including Atlassian or Dropbox. The episodes are about 40-50 minutes long but as they are fun and informal the time flies fast while listening to them. I listened to a few episodes, each of them was on a different topic. I liked for example the ones about processes and libraries. It is interesting to listen how the leading technology companies approach different subjects and how developers there work and think about their job. I like how the panelists share their knowledge and experience but are also not afraid to explain what they did wrong and how it was fixed. At the end of every episodes the panelists share their tips. Sometimes they are connected to the topic of the conversation but usually they are very diverse. They include tips to watch some Netflix series, listen to a song or watch a particular lecture online. The whole idea of this podcast is very informal - the panelists agree every time on a particular word that is not allowed but is connected to the subject. For example on the episode about performance the word measurement was forbidden. Every time sometimes says it, everyone needs to have a drink (therefore Happy Hour in the title) and it brings some funny situations (I like especially coming up with other words instead of the forbidden ones). The whole podcast feels to me like sitting in a bar close to smart and funny people discussing their job and sharing experience in a fun and informal way. I enjoy listening to it and can definitely recommend it to anyone interested in front end. Out of the podcasts I listened to this became my favourite one. My recommended episode: Pacing our drinks - Engineering Performance.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="My favourite podcasts" bordered={false}>
                Front End Happy Hour is a podcast for people interested in various areas connected to front end. On every episodes there are a few panelists - some of them are regularly on the show and there are guests too. Most of the panelists work in Netflix and the guests come from different companies including Atlassian or Dropbox. The episodes are about 40-50 minutes long but as they are fun and informal the time flies fast while listening to them. I listened to a few episodes, each of them was on a different topic. I liked for example the ones about processes and libraries. It is interesting to listen how the leading technology companies approach different subjects and how developers there work and think about their job. I like how the panelists share their knowledge and experience but are also not afraid to explain what they did wrong and how it was fixed. At the end of every episodes the panelists share their tips. Sometimes they are connected to the topic of the conversation but usually they are very diverse. They include tips to watch some Netflix series, listen to a song or watch a particular lecture online. The whole idea of this podcast is very informal - the panelists agree every time on a particular word that is not allowed but is connected to the subject. For example on the episode about performance the word measurement was forbidden. Every time sometimes says it, everyone needs to have a drink (therefore Happy Hour in the title) and it brings some funny situations (I like especially coming up with other words instead of the forbidden ones). The whole podcast feels to me like sitting in a bar close to smart and funny people discussing their job and sharing experience in a fun and informal way. I enjoy listening to it and can definitely recommend it to anyone interested in front end. Out of the podcasts I listened to this became my favourite one. My recommended episode: Pacing our drinks - Engineering Performance.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="My favourite podcasts" bordered={false}>
                Front End Happy Hour is a podcast for people interested in various areas connected to front end. On every episodes there are a few panelists - some of them are regularly on the show and there are guests too. Most of the panelists work in Netflix and the guests come from different companies including Atlassian or Dropbox. The episodes are about 40-50 minutes long but as they are fun and informal the time flies fast while listening to them. I listened to a few episodes, each of them was on a different topic. I liked for example the ones about processes and libraries. It is interesting to listen how the leading technology companies approach different subjects and how developers there work and think about their job. I like how the panelists share their knowledge and experience but are also not afraid to explain what they did wrong and how it was fixed. At the end of every episodes the panelists share their tips. Sometimes they are connected to the topic of the conversation but usually they are very diverse. They include tips to watch some Netflix series, listen to a song or watch a particular lecture online. The whole idea of this podcast is very informal - the panelists agree every time on a particular word that is not allowed but is connected to the subject. For example on the episode about performance the word measurement was forbidden. Every time sometimes says it, everyone needs to have a drink (therefore Happy Hour in the title) and it brings some funny situations (I like especially coming up with other words instead of the forbidden ones). The whole podcast feels to me like sitting in a bar close to smart and funny people discussing their job and sharing experience in a fun and informal way. I enjoy listening to it and can definitely recommend it to anyone interested in front end. Out of the podcasts I listened to this became my favourite one. My recommended episode: Pacing our drinks - Engineering Performance.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="My favourite podcasts" bordered={false}>
                Front End Happy Hour is a podcast for people interested in various areas connected to front end. On every episodes there are a few panelists - some of them are regularly on the show and there are guests too. Most of the panelists work in Netflix and the guests come from different companies including Atlassian or Dropbox. The episodes are about 40-50 minutes long but as they are fun and informal the time flies fast while listening to them. I listened to a few episodes, each of them was on a different topic. I liked for example the ones about processes and libraries. It is interesting to listen how the leading technology companies approach different subjects and how developers there work and think about their job. I like how the panelists share their knowledge and experience but are also not afraid to explain what they did wrong and how it was fixed. At the end of every episodes the panelists share their tips. Sometimes they are connected to the topic of the conversation but usually they are very diverse. They include tips to watch some Netflix series, listen to a song or watch a particular lecture online. The whole idea of this podcast is very informal - the panelists agree every time on a particular word that is not allowed but is connected to the subject. For example on the episode about performance the word measurement was forbidden. Every time sometimes says it, everyone needs to have a drink (therefore Happy Hour in the title) and it brings some funny situations (I like especially coming up with other words instead of the forbidden ones). The whole podcast feels to me like sitting in a bar close to smart and funny people discussing their job and sharing experience in a fun and informal way. I enjoy listening to it and can definitely recommend it to anyone interested in front end. Out of the podcasts I listened to this became my favourite one. My recommended episode: Pacing our drinks - Engineering Performance.
              </Card>
            </Col>
          </Row>
        <Footer
          text="I am a footer"
          link="Once to become a link to the top of the page"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
