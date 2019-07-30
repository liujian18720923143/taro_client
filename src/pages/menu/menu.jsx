import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

export default class Menu extends Component {
  config = {
    navigationBarTitleText: 'menu'
  }
  render () {
    return (
      <View className='demo-text-3'>
        <Text>
          分类
        </Text>
      </View>
    )
  }
}