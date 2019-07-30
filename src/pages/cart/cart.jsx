import Taro, { Component } from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import Commodity from './component/commodity/commodity';
import Settlement from './component/settlement/settlement';
import Final from './component/final/final';
import './cart.scss';
import { connect } from '@tarojs/redux';
import { clickManage } from '../../actions/counter';


class Cart extends Component {
  config = {
    navigationBarTitleText: 'cart'
  }
  render () {
    const {displaySettlement,commodityNum}=this.props.counter;
    const{clickManage}=this.props
    return (
      <View className='cart'>
        <View className='header'>
          <View className='headerLeft'>
            <Text>购物车（{commodityNum}）</Text><Text className='count'>共有{commodityNum}件宝贝</Text>
          </View>
          <View onClick={()=>{clickManage(displaySettlement);console.log(1000000)}}><Text style={displaySettlement[1]}>管理</Text><Text style={displaySettlement[0]}>完成</Text></View>
        </View>
        <Commodity />
        <Settlement />
        <Final />
      </View>
    )
  }
}

export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  clickManage (displaySettlement) {
    dispatch(clickManage(displaySettlement))
  }
}))(Cart)