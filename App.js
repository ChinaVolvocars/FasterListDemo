/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Button title={'FlatListDemo'} onPress={() => {
          navigation.navigate('FlatListDemo');
        }}/>

        <Button style={{marginTop: 30}} title={'SwipeableFlatListDemo'} onPress={() => {
          navigation.navigate('SwipeableFlatList');
        }}/>

        <Button style={{marginTop: 30}} title={'SectionListDemo'} onPress={() => {
          navigation.navigate('SectionListDemo');
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
