import axios from 'axios'
import AxiosAdapter from 'axios-mock-adapter'

function random(min, max) {
    return Math.floor(Math.random() * max - min)+min
}
let timer;
function delay(data) {
    return function(){
        return new Promise(function (resolve, reject) {
            timer = setTimeout(() => {
                resolve([200, data])
                clearTimeout(timer)
            }, random(1000, 5000))
        })
    }
}

let mocker = new AxiosAdapter(axios);

//首页商品列表
import getGoodsChannel1 from '../service/goodsChannel.json';
import getGoodsChannel2 from '../service/goodChannel2.json';
mocker.onPost('/mall/index/getGoodsChannel', { channel_id: 1 }).reply(delay(getGoodsChannel2));
mocker.onPost('/mall/index/getGoodsChannel', { channel_id: 2 }).reply(delay(getGoodsChannel1));
mocker.onPost('/mall/index/getGoodsChannel', { channel_id: 3 }).reply(delay(getGoodsChannel2));

//添加购物车
import addCart from '../service/addCart.json';
mocker.onPost('/user/Cart/addCart', { key_code: 123, goods_id: 123 }).reply(200, addCart)

//请求分类页的数据
import catagory from '../service/catagory.json';
mocker.onPost('/h5/mtop.relationrecommend.wirelessrecommend.recommend').reply(delay(catagory))

//注册与登录
//验证码获取
mocker.onPost('/verifycode').reply(function(config){
    let phone = JSON.parse(config.data).pn;
    return [200,phone.slice(-4)]
})

mocker.onPost('/register').reply(function(config){
    let register_info = JSON.parse(config.data)

    let ls = localStorage;
    
    let register_history=[];
    if(!ls.getItem('register-info')){
        register_history.push(register_info)
    }else{
        register_history = JSON.parse(ls.getItem('register-info'));
        register_history.push(register_info)
    }

    ls.setItem('register-info',JSON.stringify(register_history))


    return [200,'success']
})

mocker.onPost('/login').reply(config=>{
    let login_info = JSON.parse(config.data)
    console.log(login_info);
    let ls = localStorage;
    let register_history = JSON.parse(ls.getItem('register-info'));
    let is_right= false;
    register_history.forEach((item,index)=>{
        if(item.phone_number===login_info.phone && item.password===login_info.password){
            is_right = true
        }
    })

    if(is_right){
        return [200,{
            tocken:login_info.phone
        }]
    }else{
        return [500,'登录信息有误']
    }
    
    
})


