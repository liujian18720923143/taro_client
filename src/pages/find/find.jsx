import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

export default class Find extends Component {
  config = {
    navigationBarTitleText: 'find'
  }
  render () {
    return (
      <View>
        <Text>
          发现
        </Text>
      </View>
    )
  }
}