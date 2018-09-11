/**
 * Test for HOC with state change
 **/

import * as React from 'react';
import {TestComponent} from './TestComponent';
import hasNetwork from '../hasNetwork';
import { shallow, mount, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('HOC has loaded', () => {
  it('condition when network is detecting', () => {
    const ConditionalComponent = hasNetwork(TestComponent);
    const wrapper = shallow(
      <ConditionalComponent/>
    );
    expect(wrapper.html()).toBe(null);
  });
  it('condition when network is detected', () => {
    const ConditionalComponent = hasNetwork(TestComponent);
    const wrapper = shallow(
      <ConditionalComponent/>
    );
    wrapper.setState({
      isChecking: false,
      isConnectable: true
    })
    expect(wrapper.text()).toBe("<TestComponent />");
  });
  it('condition when network is not detected', () => {
    const ConditionalComponent = hasNetwork(TestComponent);
    const wrapper = shallow(
      <ConditionalComponent/>
    );
    wrapper.setState({
      isChecking: false,
      isConnectable: false
    })
    expect(wrapper.text()).toBe("< />");
    expect(wrapper.dive().text()).toBe("<Text />");
  });
})
