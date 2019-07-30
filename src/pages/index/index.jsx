import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'index'
  }
  render () {
    return (
      <View className='demo-text-3'>
        <Text>
          首页
        </Text>
      </View>
    )
  }
}