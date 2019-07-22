import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Text1 extends Component{
    render(){
        return (
            <View>
                <Text selectable>woshi</Text>
            </View>
        )
    }
}