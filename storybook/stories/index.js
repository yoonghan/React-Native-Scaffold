import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import PriceListing from './PriceListing';
import Chart from './Chart';
import {ErrorType, LabelType} from './Text';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Han Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('Listing', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with 2 item', () => (
    <PriceListing/>
  ));

storiesOf('Chart', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with basic chart', () => (
    <Chart/>
  ));

storiesOf('Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with error', () => (
    <ErrorType/>
  ))
  .add('with label', () => (
    <LabelType/>
  ));
