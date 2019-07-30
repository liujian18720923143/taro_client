import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index';
import { Provider } from '@tarojs/redux';
import configStore from './store';

import './app.scss';
import { from } from '_array-flatten@2.1.2@array-flatten';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store=configStore();

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/menu/menu',
      'pages/find/find',
      'pages/cart/cart',
      'pages/self/self'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color: '#999',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list:[
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: '../assets/home.png',
          selectedIconPath: '../assets/home_selected.png'
        },
        {
          pagePath: 'pages/cart/cart',
          text: '购物车',
          iconPath: '../assets/cart.png',
          selectedIconPath: '../assets/cart_selected.png'
        },
        {
          pagePath: 'pages/menu/menu',
          text: '订单列表',
          iconPath: '../assets/list.png',
          selectedIconPath: '../assets/list_selected.png'
        },
        {
          pagePath: 'pages/self/self',
          text: '我的淘宝',
          iconPath: '../assets/touxiang.png',
          selectedIconPath: '../assets/touxiang_selected.png'
        },
        {
          pagePath: 'pages/find/find',
          text: '更多',
          iconPath: '../assets/more.png',
          selectedIconPath: '../assets/more_selected.png'
        }
      ]
    }
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
