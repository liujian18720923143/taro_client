import { Component } from '@tarojs/taro'
import { View, Text, Input, Radio, Image, Icon} from '@tarojs/components'
import './mask.scss';
import { connect } from '@tarojs/redux';
import { attr } from '../../../../actions/counter';

class Mask extends Component {
  render () {
    const { img, attribute }=this.props.commodity;
    const { count, price, current, key, value}=attribute;
    const { displayAttr }=this.props.counter;
    return (
      
      <View className='masks' style={'display:'+ displayAttr[this.props.j]}>
        <View className='mask'>
          <View className='bottom'>
            <View className='head'>
              <View className='imgs'>
                <Image src={img} className='img'></Image>
              </View>
              <View className='current'>
                <Icon size='20' type='clear' color='#ccc' className='cancel' onClick={()=>{this.props.attr(this.props.j,displayAttr)}}/>
                <Text className='price'>{price}</Text>
                <Text>库存：{count} </Text>
                <Text>已选：{current.map((val1,index)=>{
                  
                  let value1='';
                  value1=value1+value[index][val1];
                  return value1;
                })}</Text>
              </View>
            </View>
            <View className='attrs'>{
              key.map((attr,index)=>(
                <View className='attr' key={index}>
                  <Text>{attr}</Text>
                  <View className='attribute'>
                    {
                      value[index].map((val,index1)=>{
                        return(
                          <Text key={index1} className={index1==current[index]?'allAttr currentAttr':'allAttr'}>{val}</Text>
                        )
                      })
                    }
                  </View>
                </View>
              ))
            }</View>
            <View className='btns'>
              <View className='btn'>确认</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  attr (i,displayAttr) {
    dispatch(attr(i,displayAttr))
  }
}))(Mask)
 