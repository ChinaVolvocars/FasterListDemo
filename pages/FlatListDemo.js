/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';

type Props = {};
const CITY_NAMES = ['AA', 'FF', 'XC', 'XX', '2R', '2T2', 'RT', 'GG', 'HH', 'LL', 'PP', 'PP', 'PP', 'PP', 'PP',
  'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP',
  'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP'];
export default class FlatListDemo extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataArray: CITY_NAMES
    }
  }

  loadData() {
    this.setState({
        isLoading: true,
      }
    );

    setTimeout(() => {
      let dataArr = [];
      for (let i = 0; i < 10; i++) {
        dataArr.push('新数据：' + i + ' 时间：' + new Date().getTime());
      }
      this.setState({
        dataArray: [...dataArr, ...this.state.dataArray],
        isLoading: false
      })
    }, 2000)
  }


  _renderItem(data) {
    return <View>
      <Text style={{
        alignItems: 'center',
        marginTop: 1,
        flex: 1,
        height: 50,
        textColor: '#567',
        backgroundColor: '#789'
      }}>{data.item}</Text>
    </View>
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataArray}
          renderItem={(data) => this._renderItem(data)}
          refreshing={this.state.isLoading}
          onRefresh={() => this.loadData()}
        />
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
