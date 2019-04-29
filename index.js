/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import FlatListDemo from './pages/FlatListDemo';

/**
 * {StackNavigator}已经无法使用了，请使用{createStackNavigator}
 * 步骤：
 * 1.导包`import {createStackNavigator, createAppContainer} from 'react-navigation';`
 * 2.const AppRoot = createStackNavigator({
 *     App: {
 *       screen: App,
 *     },
 *     FlatListDemo: {
 *       screen: FlatListDemo,
 *         navigationOptions: {title: 'FlatListDemo'}
 *     },
 *   });
 * 3. const appContainer = createAppContainer(AppRoot);
 * 4. AppRegistry.registerComponent(appName, () => appContainer);
 * @type {NavigationContainer}
 */
const AppRoot = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      title: 'Home'
    }
  },
  FlatListDemo: {
    screen: FlatListDemo,
    navigationOptions: {title: 'FlatListDemo'}
  },
});

const appContainer = createAppContainer(AppRoot);


AppRegistry.registerComponent(appName, () => appContainer);
