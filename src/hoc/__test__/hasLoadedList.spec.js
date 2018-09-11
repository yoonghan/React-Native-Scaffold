/**
 * Test for HOC and mocking for Redux.
 */

import * as React from 'react';
import {TestComponent} from './TestComponent';
import hasLoadedList from '../hasLoadedList';
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

    const ConditionalComponent = hasLoadedList(null)(TestComponent);
    const wrapper = shallow(
      <ConditionalComponent/>, { context: { store } }
    );
    expect(wrapper.text()).toBe("<LoaderHOC />");
  });
  it('condition when list is loaded', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});
    const mapStateToProps = state => (
    {
      items: [{first:'First'}]
    });
    function emptyRequest() {
      return {
        type: "NOTHING"
      }
    }

    const ConditionalComponent = hasLoadedList(emptyRequest, mapStateToProps)(TestComponent);
    const wrapper = shallow(
      <ConditionalComponent/>, { context: { store } }
    );
    expect(wrapper.dive().text()).toBe("<TestComponent />");
  });
  it('condition when list is loaded', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});
    const mapStateToProps = state => (
    {
      error: "Error",
      items: []
    });
    function emptyRequest() {
      return {
        type: "NOTHING"
      }
    }

    const ConditionalComponent = hasLoadedList(emptyRequest, mapStateToProps)(TestComponent);
    const wrapper = shallow(
      <ConditionalComponent/>, { context: { store } }
    );
    expect(wrapper.dive().text()).toContain("< />");
    expect(wrapper.dive().dive().text()).toContain("<Text />");
  });
});
