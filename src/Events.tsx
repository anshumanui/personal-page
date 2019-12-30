import React from 'react';
import { Timeline } from 'antd';

class Events extends React.Component {

  render() {
    return (
      <>
        <h3>I enjoy organising events and enabling people to come together, learn and grow. It always helps me to learn something new myself. I co-led all of the events listed below.</h3>
        <Timeline mode="alternate">
          <Timeline.Item color="green">Reactive Conf, Code Retreat workshop 1-Nov-2019</Timeline.Item>
          <Timeline.Item color="green">Open meetup at MSD, Hacktoberfest workshop 23-Oct-2019</Timeline.Item>
          <Timeline.Item color="green">Open meetup at MSD, Code Retreat workshop 11-Jun-2019</Timeline.Item>
          <Timeline.Item color="green">Dev Fest, Code Retreat workshop 2-Nov-2018</Timeline.Item>
        </Timeline>
      </>
    );
  }
}

export default Events;