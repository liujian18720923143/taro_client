import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './shop.scss'

export default class Shop extends Component {

  config = {
    navigationBarTitleText: '商品'
  }

  render () {
    return (
      <View className='index'>
        <ScrollView scrollX scrollY className='scroll'> 
          <View className='row-item row-item1' />
          <View className='row-item row-item2' />
          <View className='row-item row-item3' />
        </ScrollView>
        <View>
          <Text>滑动组件</Text>
        </View>
      </View>
    )
  }
}
