import { Component } from '@tarojs/taro';
import { View, Text, Image, Radio, Button, Input} from '@tarojs/components';
import Mask from '../mask/mask';
import './commodity.scss';
import {connect} from '@tarojs/redux';
import {add, minus, entry, attr, clickShopRadio, clickCommodityRadio} from '../../../../actions/counter';

let i=-1;

class Commodity extends Component {

  constructor(){
    super(...arguments);
    console.log(this.props);
  }

  render () {
    console.log(this.props)
    const { dec, add, entry, attr, clickShopRadio, clickCommodityRadio}=this.props;
    const { num, displayAttr, radio, data  }=this.props.counter;
    const { commodityRadio,shopRadio,allRadio }=radio;
    
    return (
      <View className='shops'>
        {
          data.shop.map((shop,index1)=>{
            return (
              <View key={index1} className='shop'>
                <View className='shopTitle'>
                  <View className='left'>
                    <View onClick={()=>{clickShopRadio(index1,commodityRadio,shopRadio,allRadio,shop,num);console.log(100)}}>
                      <Radio checked={shopRadio[index1]} ></Radio>
                    </View>
                    <Image src={shop.logo} className='img' />
                    <Text className='shopName'>{shop.name} <Text className='arrow'>&gt;</Text></Text>
                  </View>
                  <View className='right'>
                    <Text>{shop.Securities}</Text>
                  </View>
                </View>
                <View className='commodities'>    
                  {
                    shop.commodity.map((commodity,index)=>{
                      i++;
                      console.log(i)
                      if(i==6){i=0;}
                      let j=i;
                      return (
                        <View className='commodity' key={index}>
                          <Mask commodity={commodity} j={j}/>
                          <View className='check' onClick={()=>{clickCommodityRadio(index1,index,commodityRadio,shopRadio,allRadio,commodity,num)}}>
                            <Radio width='45px' height='90px' checked={commodityRadio[index1][index]} ></Radio>
                          </View>
                          <View className='cAttr'>
                            <View className='cImg'>
                              <Image src={commodity.img} className='img' />
                            </View>
                            <View className='cContent'>
                              <Text className='cName'>{commodity.name}</Text>
                              <View className='attr' onClick={()=>{attr(j,displayAttr)}}>
                                <Text >{commodity.attribute.current.map((val,index)=>{
                                  let value='';
                                  value=value+commodity.attribute.value[index][val];
                                  return value;
                                })}</Text>
                                <Text className='cert'>&gt;</Text>
                              </View>
                              <View className='priceCount'>
                                <View >
                                  <Text className='price'>¥ {commodity.attribute.price}</Text>
                                </View>
                                <View className='count'>
                                  <Button className='btn' onClick={num[i]>1?()=>{dec(index1,index,num,commodityRadio,data)}:''}>-</Button>
                                  <Input type='number' className='num' value={num[index1][index]} onBlur={(ev)=>(entry(ev,index1,index,num,commodityRadio,data))}/>
                                  <Button className='btn' onClick={()=>{add(index1,index,num,commodityRadio,data);}}>+</Button>
                                </View>
                              </View>
                            </View>
                          </View>
                          
                        </View>
                      )
                    })
                  }
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add (index1,index,num,commodityRadio,data) {
    dispatch(add(index1,index,num,commodityRadio,data))
  },
  dec (index1,index,num,commodityRadio,data) {
    dispatch(minus(index1,index,num,commodityRadio,data))
  },
  entry (ev,index1,index,num,commodityRadio,data) {
    dispatch(entry(ev,index1,index,num,commodityRadio,data))
  },
  attr (i,displayAttr) {
    dispatch(attr(i,displayAttr))
  },
  clickShopRadio (i,commodityRadio,shopRadio,allRadio,shop,num) {
    dispatch(clickShopRadio(i,commodityRadio,shopRadio,allRadio,shop,num))
  },
  clickCommodityRadio (i,j,commodityRadio,shopRadio,allRadio,commodity,num) {
    dispatch(clickCommodityRadio(i,j,commodityRadio,shopRadio,allRadio,commodity,num))
  }
}))(Commodity)
 
