import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>flex-diretion:row ????</Text>
        <View className='row'>
          <View className='row-item row-item1' />
          <View className='row-item row-item2' />
          <View className='row-item row-item3' />
        </View>

        <Text>flex-diretion:column ????</Text>
        <View className='column'>
          <View className='column-item' />
          <View className='column-item column-item2' />
          <View className='column-item column-item3' />
        </View>
      </View>
    )
  }
}
