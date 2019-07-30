import {
  ADD,
  MINUS,
  ENTRY,
  ATTR,
  CLICKSHOPRADIO,
  CLICKCOMMODITYRADIO,
  CLICKALLRADIO,
  CLICKREMOVE,
  CLICKMANAGE
} from '../constants/counter';
import data from '../pages/cart/component/data.json';

/**
 * 剩余功能
 * 管理
 * 商品列表的商品数量
 * sql的切换
 * 结算
 */

let price=0;//被选商品价值总和

//处理商品数量自增的函数
export const add = (i,j,num,commodityRadio,data) => {
  if(commodityRadio[i][j]==true){
    console.log(3000)
    console.log('data.shop[i].commodity[j].price',data.shop[i].commodity[j].attribute.price)
    price+=data.shop[i].commodity[j].attribute.price;
    console.log(price)
  }
  num[i][j]++;
  return {
    type: ADD,
    data: {num,price}
  }
}

//处理商品数量自减的函数
export const minus = (i,j,num,commodityRadio,data) => {
  console.log(i);
  if(commodityRadio[i][j]==true){
    price-=data.shop[i].commodity[j].attribute.price;
  }
  num[i][j]--;
  return {
    type: MINUS,
    data: {num,price}
  }
}

//处理输入商品数量的函数
export const entry = (ev,i,j,num,commodityRadio,data) => {
  console.log(i);
  console.log('ev',ev);
  if(commodityRadio[i][j]==true){
    price+=data.shop[i].commodity[j].attribute.price*(ev.detail.value-num[i][j])
  }
  num[i][j]=Number(ev.detail.value);
  console.log('num[i]',num[i][j]<1);
  if(num[i][j]<1){
    num[i][j]=1;
  }
  return {
    type: ENTRY,
    data: {num,price}
  }
}

//处理商品属性列表的显示和隐藏的函数
export const attr = (i,displayAttr) => {
  displayAttr[i]=displayAttr[i]=='none'?'block':'none';
  console.log(i,'i')
  return {
    type: ATTR,
    data: displayAttr
  }
}

//处理商店的单选
export const clickShopRadio = (i,commodityRadio,shopRadio,allRadio,shop,num) => {
  let count=0;//被选商品的数量
  
  //商店的单选框状态
  shopRadio[i]=!shopRadio[i];

  //被选商品的总价
  if(shopRadio[i]==true){
    shop.commodity.map((val,index)=>{
      if(commodityRadio[i][index]==false){
        price+=val.attribute.price*num[i][index];
      }
    })
  }else{
    shop.commodity.map((val,index)=>{

      price-=val.attribute.price*num[i][index];
    })
  }

  //商品的单选框状态
  commodityRadio[i]=commodityRadio[i].map(val=>shopRadio[i]);
  console.log('shopRadio',shopRadio.every(val=>{return shopRadio[i]==val}));

  //全选框的状态
  if(shopRadio.every(val=>true==val)){
    console.log(2000)
    allRadio=true;
  }else{
    allRadio=false;
  }

  //统计被选商品的数量
  commodityRadio.map(val=>{
    console.log(val,'val');
    val.map((val)=>{
      if(val==true){
        console.log(val,'val');
        console.log(count,'count');
        count++;
      }
    });
  });
  return {
    type: CLICKSHOPRADIO,
    data: {
      radio:{commodityRadio,shopRadio,allRadio},
      count,
      price
    }
  }
}

//处理商品的单选
export const clickCommodityRadio = (i,j,commodityRadio,shopRadio,allRadio,commodity,num) => {
  let count=0;
  console.log('price',price)

  commodityRadio[i][j]=!commodityRadio[i][j];
  
  if(commodityRadio[i][j]==true){
    console.log('num[i][j]',num[i][j])
    price+=commodity.attribute.price*num[i][j];
  }else{
    price-=commodity.attribute.price*num[i][j]
  }

  if(commodityRadio[i].every(val=>true==val)){
    shopRadio[i]=true;
  }else{
    shopRadio[i]=false;
  }

  if(shopRadio.every(val=>true==val)){
    console.log(300)
    allRadio=true;
  }else{
    allRadio=false;
  }

  commodityRadio.map(val=>{
    console.log(val,'val');
    val.map((val)=>{
      if(val==true){
        console.log(val,'val');
        console.log(count,'count');
        count++;
      }
    });
  });
  console.log('price',price)
  return {
    type: CLICKCOMMODITYRADIO,
    data: {
      radio:{commodityRadio,shopRadio,allRadio},
      count,
      price
    }
  }
}

//处理全选函数
export const clickAllRadio = (commodityRadio,shopRadio,allRadio,num) => {
  let count=0;
  price=0;

  allRadio=!allRadio;
  console.log(allRadio,'radio');

  //价格处理
  if(allRadio==true){
    data.shop.map((val,i)=>{
      val.commodity.map((val,j)=>{
          price+=val.attribute.price*num[i][j];
      })
    })
  }

  commodityRadio=commodityRadio.map(val=>{
    return val.map(val=>allRadio)
  })
  console.log(commodityRadio,shopRadio,allRadio);

  shopRadio=shopRadio.map(val=>allRadio);

  commodityRadio.map(val=>{
    console.log(val,'val');
    val.map((val)=>{
      if(val==true){
        console.log(val,'val');
        console.log(count,'count');
        count++;
      }
    });
  });
  return {
    type: CLICKALLRADIO,
    data: {
      radio:{commodityRadio,shopRadio,allRadio},
      count,
      price
    }
  }
}

export const clickManage = (displaySettlement) => {
  displaySettlement.reverse();
  return {
    type: CLICKMANAGE,
    data: {
      displaySettlement
    }
  }
}

export const clickRemove = (commodityRadio,shopRadio,commodityNum,num,data,allRadio,price,final,count) => {
  commodityNum=0;
  final.kind=count;
  for(let i=0;i<commodityRadio.length;i++){
    for(let j=0;j<commodityRadio.length;){
      
    }
  }
  for(let i=0;i<shopRadio.length;){
    if(shopRadio[i]==true){
      commodityRadio.splice(i,1);
      shopRadio.splice(i,1);
      data.shop.splice(i,1);
      num[i].map(val=>{
        final.number+=val;
      })
      num.splice(i,1);
    }else{
      i++;
    }
  }
  for(let i=0;i<commodityRadio.length;i++){
    for(let j=0;j<commodityRadio.length;){
      if(commodityRadio[i][j]==true){
        commodityRadio[i].splice(j,1);
        data.shop[i].commodity.splice(j,1);
        final.number+=num[i][j];
        num[i].splice(j,1);
      }else{
        j++;
      }
    }
  }
  commodityRadio.map(val=>{val.map(val=>{
    commodityNum++;
    console.log(commodityNum,'commodityNum')
  })});
  allRadio=false;
  let radio={
    commodityRadio,shopRadio,allRadio
  }
  final.price=price;
  return {
    type: CLICKREMOVE,
    data: {
      commodityNum,num,data,radio,final
    }
  }
}

