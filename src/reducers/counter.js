import { ADD, MINUS, ENTRY, ATTR, CLICKALLRADIO, CLICKSHOPRADIO, CLICKCOMMODITYRADIO, CLICKMANAGE, CLICKREMOVE } from '../constants/counter'
import data from '../pages/cart/component/data.json';
//初始state数据
const INITIAL_STATE = {
  num: [[1],[1],[1,1],[1,1]],
  displayAttr: ['none','none','none','none','none','none'],
  radio:{
    commodityRadio: [[false],[false],[false,false],[false,false]],
    shopRadio: [false,false,false,false],
    allRadio: false
  },
  count: 0,
  displaySettlement: [
    {display:'none'},    
    {display:'flex'}    
  ],
  price: 0,
  data,
  commodityNum: 6,
  final:{
    price: 0,
    kind: 0,
    number: 0
  }
}

//分支redux处理函数
export default function counter (state = INITIAL_STATE, action) {
  console.log(30000000)
  switch (action.type) {
    case ADD:
    case MINUS:
    case ENTRY:
      return {
        ...state,
        num: action.data.num,
        price: action.data.price
      }
    case ATTR:
      return {
        ...state,
        displayAttr: action.data
      }
    case CLICKALLRADIO:
    case CLICKSHOPRADIO:
    case CLICKCOMMODITYRADIO:
      return {
        ...state,
        radio: action.data.radio,
        count: action.data.count,
        price: action.data.price
      }
      case CLICKMANAGE:
        return {
          ...state,
          displaySettlement: action.data.displaySettlement
        }
      case CLICKREMOVE:
      {
        console.log(8000000000000)
        return {
          ...state,
          commodityNum: action.data.commodityNum,
          num: action.data.num,
          count: 0,
          radio: action.data.radio,
          data: action.data.data,
          price: 0,
          final
        }
      }
     default:
       return state
  }
}
