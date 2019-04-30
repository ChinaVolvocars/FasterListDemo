/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet,
  Text, View, FlatList, RefreshControl, ActivityIndicator, SwipeableFlatList, TouchableHighlight
} from 'react-native';

type Props = {};
const CITY_NAMES = ['AA', 'FF', 'XC', 'XX', '2R', '2T2', 'RT', 'GG', 'HH', 'LL', 'PP', 'PP', 'PP', 'PP', 'PP',
  'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP',
  'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP'];
export default class SwipeableFlatListDemo extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataArray: CITY_NAMES
    }
  }

  loadData(refreshing) {
    if (refreshing) {
      this.setState({
          isLoading: true,
        }
      );
    }

    setTimeout(() => {
      let dataArr = [];
      for (let i = 0; i < 10; i++) {
        dataArr.push('新数据：' + i + ' 时间：' + new Date().getTime());
      }
      let newVar = refreshing === true ? [...dataArr, ...this.state.dataArray] : [...this.state.dataArray, ...dataArr];
      this.setState({
        dataArray: newVar,
        isLoading: false,
      })

    }, 2000)
  }


  _renderItem(data) {
    return <View>
      <Text style={styles.renderItem}>{data.item}</Text>
    </View>
  };

  loadMoreView() {
    return <View style={styles.loadMoreView}>
      <ActivityIndicator
        size={'small'}
        color={'red'}
        animating={true}/>
      <Text style={styles.loadMoreViewText}>正在加载更多...</Text>
    </View>
  }

  renderQuickActionsView() {
    return <View style={styles.quickContainer}>
      <TouchableHighlight onPress={() => {
        alert('确认删除？')
      }}>
        <View style={styles.quick}>
          <Text style={styles.touchableHighlightText}>删除</Text>
        </View>
      </TouchableHighlight>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeableFlatList
          data={this.state.dataArray}
          renderItem={(data) => this._renderItem(data)}
          // refreshing={this.state.isLoading}
          // onRefresh={() => this.loadData()}
          refreshControl={
            <RefreshControl
              //ios
              title={'加载中'}
              tintColor={'orange'}
              titleColor={'red'}
              //android
              color={['red', 'orange', 'peachpuff', 'lavender']}
              refreshing={this.state.isLoading}
              onRefresh={() => this.loadData(true)}
            />
          }
          ListFooterComponent={() => this.loadMoreView()}
          onEndReached={() => {
            this.loadData();
          }}

          renderQuickActions={() => this.renderQuickActionsView()}
          maxSwipeDistance={100}
          bounceFirstRowOnMount={false}
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
    loadMoreView: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      padding: 10,
    },
    loadMoreViewText: {
      marginLeft: 14,
      fontSize: 12,
      color: 'red',
    },
    renderItem: {
      alignItems: 'center',
      marginTop: 1,
      flex: 1,
      height: 50,
      backgroundColor: '#789'
    },
    touchableHighlightText: {
      color: 'white',
      fontSize: 16,
    },
    quick: {
      backgroundColor: 'red',
      flex: 1,
      alignItems: 'flex-end',
      alignSelf: 'center',
      justifyContent: 'center',
      padding: 10,
      width: 120,
    },

    quickContainer: {
      flex: 1,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 15,
    },
  })
;
