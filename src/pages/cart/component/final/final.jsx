import { Component } from '@tarojs/taro'
import { View, Text, Radio} from '@tarojs/components'
import './final.scss'
import { connect } from '@tarojs/redux';
import { clickAllRadio, clickRemove } from '../../../../actions/counter';

class Final extends Component{

  render(){
    return(
      <View>
        <View>
          <View>结算</View>
          <View>共{final.kind}样{final.number}件，共计{final.price}元</View>
        </View>
        
      </View>
    )
  }
}

export default connect(({ counter }) => ({
    counter
  }), (dispatch) => ({
    add (index1,index,num,commodityRadio,data) {
      dispatch(add(index1,index,num,commodityRadio,data))
    }
  }))(Final)
   