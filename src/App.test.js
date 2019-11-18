import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

describe('App', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const renderComponent = () => Enzyme.shallow(<App />,);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render header', () => {
    const wrapper = renderComponent();

    expect(wrapper.find('Header')).to.have.lengthOf(1);
  });

  it('should render 3 articles', () => {
    const wrapper = renderComponent();

    expect(wrapper.find('Article')).to.have.lengthOf(3);
  });

  it('should render footer', () => {
    const wrapper = renderComponent();

    expect(wrapper.find('Footer')).to.have.lengthOf(1);
  });
});