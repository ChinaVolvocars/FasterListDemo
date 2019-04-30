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
  Text, View, FlatList, RefreshControl, ActivityIndicator, SwipeableFlatList, SectionList
} from 'react-native';

type Props = {};
const CITY_NAMES = [{
  data: ['AA', 'FF', 'XC', 'XX', '2R', '2T2', 'RT', 'GG', 'HH', 'LL', '嘎嘎嘎', '嘎嘎嘎', '嘎嘎嘎', '嘎嘎嘎', '嘎嘎嘎'],
  title: '一一一一'
}, {
  data: ['PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP', 'PP'],
  title: '二二二'
}, {
  data: ['WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW', 'WWW'],
  title: '三三三'
}, {
  data: ['UUU', 'UUU', 'UUU', 'UUU', 'UUU', 'UUU', 'UUU', 'UUU', 'UUU', 'UUU', 'UUU', 'UUU'],
  title: '七七七'
},
];
export default class FlatListDemo extends Component<Props> {

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
      for (let j = 0; j < 5; j++) {
        let newData = {
          title: "WQW",
          data: []
        };
        newData.title = '标题：' + j;
        for (let i = 0; i < 10; i++) {
          newData.data.push('新数据：' + i + ' 时间：' + new Date().getTime());
        }
        dataArr.push(newData);
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

  _renderSectionHeaderView({section}) {
    return <View style={{flex: 1, backgroundColor: 'deeppink', height: 22}}>
      <Text style={{fontSize: 12}}>{section.title}</Text>
    </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.dataArray}
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

          renderSectionHeader={(data) => this._renderSectionHeaderView(data)}

          ItemSeparatorComponent={() => <View style={{flex: 1, height: 1, backgroundColor: 'gray'}}/>}


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
    flex: 1,
    height: 50,
    backgroundColor: '#789'
  },
});
