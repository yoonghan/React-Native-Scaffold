/**
 * Test for HOC and mocking for Redux.
 */

import * as React from 'react';
import {TestComponent} from './TestComponent';
import withBtcConnectivity from '../withBtcConnectivity';
import { shallow, mount, render } from 'enzyme';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('HOC has loaded', () => {
  it('condition when list has not load', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    const ConditionalComponent = withBtcConnectivity(TestComponent);
    const wrapper = shallow(
      <ConditionalComponent/>, { context: { store } }
    );
    expect(wrapper.text()).toBe("<BtcConnectivity />");
    expect(wrapper.dive().props().clickAndFetchBtcHistory).toBeDefined(); //Check if it is defined.
  });
});
