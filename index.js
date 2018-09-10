/** @format */
import Storybook from './storybook';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

/**
 * Factor manual code trigger to change between storybook view or real app view.
 **/
AppRegistry.registerComponent(appName, () => Storybook);
//AppRegistry.registerComponent(appName, () => App);
