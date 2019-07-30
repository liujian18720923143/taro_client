import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

export default class Self extends Component {
  config = {
    navigationBarTitleText: 'self'
  }
  render () {
    return (
      <View className='demo-text-3'>
        <Text>
          个人中心
        </Text>
      </View>
    )
  }
}