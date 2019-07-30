import { Component } from '@tarojs/taro'
import { View, Text, Radio} from '@tarojs/components'
import './settlement.scss'
import { connect } from '@tarojs/redux';
import { clickAllRadio, clickRemove } from '../../../../actions/counter';

class Settlement extends Component {
  render () {
    const { clickAllRadio, clickRemove }=this.props;
    const { radio, count, price, num, displaySettlement, commodityNum, data, final }=this.props.counter;
    const { commodityRadio,shopRadio,allRadio }=radio;
    console.log('radio',allRadio);
    return (
      <View className='total'>
        <View className='settlement'>
          <View className='left' onClick={()=>{clickAllRadio(commodityRadio,shopRadio,allRadio,num,data);console.log(radio,'radio')}}>
            <Radio checked={allRadio} >全选</Radio>
          </View>
          <View className='right1' style={displaySettlement[0]}>
            <View className='clear'>清理</View>
            <View className='collect'>移入收藏夹</View>
            <View className='remove' onClick={()=>{clickRemove(commodityRadio,shopRadio,commodityNum,num,data,allRadio)}}>删除</View>
          </View>
          <View className='right' style={displaySettlement[1]}>
            合计：
            <Text className='price'>¥ {price}</Text>
            <Text className='count' onClick={()=>{clickRemove(commodityRadio,shopRadio,commodityNum,num,data,allRadio,price,final,count)}}>结算({count})</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  clickAllRadio (commodityRadio,shopRadio,allRadio,num,data) {
    dispatch(clickAllRadio(commodityRadio,shopRadio,allRadio,num,data))
  },
  clickRemove (commodityRadio,shopRadio,commodityNum,num,data,allRadio,price,final,count) {
    dispatch(clickRemove(commodityRadio,shopRadio,commodityNum,num,data,allRadio,price,final,count))
  }
}))(Settlement)
 