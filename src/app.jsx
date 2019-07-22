import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'
import { black } from '_ansi-colors@3.2.4@ansi-colors';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/swiper/swiper',
      'pages/icon/icon',
      'pages/text/text',
      'pages/shop/shop'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color: 'black',
      selectedColor: 'red',
      backgroundColor: '#999',
      borderStyle: 'black',
      list:[
        {
          "pagePath": 'pages/index/index',
          "text": '首页'
        },{
          "pagePath": 'pages/shop/shop',
          "text": '商品'
        },{
          "pagePath": 'pages/swiper/swiper',
          "text": '轮播'
        },{
          "pagePath": 'pages/icon/icon',
          "text": '图标'
        },{
          "pagePath": 'pages/text/text',
          "text": '文字'
        }
      ]
    }
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
