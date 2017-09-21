<template>
    <div class="details">
        <div class="details-header">
            <p><i class="icon iconfont icon-back"></i>返回</p>
            <ul>
                <li class="active">
                    <a href="javascript:;">商品</a>
                </li>
                <li>
                    <a href="javascript:;">详情</a>
                </li>
            </ul>
            <p>
                <i class="icon iconfont icon-message"></i>
            </p>
        </div>
        <div class="details-wrap">
            <div class="details-banner">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="../../assets/1.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="../../assets/2.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="../../assets/3.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="../../assets/4.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="details-title">
                卡易 荞麦沙琪玛 318g 酥松香甜卡易 荞麦沙琪玛酥松香甜荞麦沙琪玛
            </div>
            <div class="details-price">
                <div class="price">
                    <p>￥109.00
                        <a href="javascript:;">￥998.00</a>
                    </p>
                    <p>(运费：￥8.00)</p>
                </div>
                <div class="queryBtn">
                    溯源查询
                </div>
                
            </div>
            <div class="on-sale">
                <span class="on-sale-btn">店铺优惠</span>
                <span>满3件包邮</span>
            </div>
            <dl class="shop">
                <dt>
                    <i class="icon iconfont icon-shop"></i>
                </dt>
                <dd>
                    <p>恒之然旗舰店</p>
                    <p>店主：HZR1501032</p>
                    <span>进入店铺</span>
                </dd>
            </dl>
            
        </div>
        <div class="details-footer">
            <ul>
                <li>
                    <i class="icon iconfont icon-people"></i>
                    <span>客服</span>
                </li>
                <li>
                    <i class="icon iconfont icon-cart"></i>
                    <span>购物车</span>
                </li>
                <li>
                    加入购物车
                </li>
                <li>
                    立即购买
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
//import hotRecommend from '../../components/recommend/recommend.vue';
export default {
  created(){
    console.log(this.$route.query.id)
    // this.$http.post('/shop',{id:this.$route.query.id}).then((res)=>{
    //   console.log()
    // })
  },
    mounted(){
        new Swiper('.swiper-container',{
            pagination:'.swiper-pagination',
            autoplay: 2000,
            loop: true
        })
    }
}
</script>
<style scoped>
.details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  background-color: #eeeeee;
}

.details-header {
  padding-top: .2rem;
  height: 0.88rem;
  font-size: .28rem;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding-left: .3rem;
  padding-right: .3rem;
  box-sizing: border-box;
  background-color: #fff;
}
.details-header > ul {
  -webkit-flex: 1;
  display: -webkit-flex;
}
.details-header > ul li {
  width: 50%;
  line-height: .88rem;
  text-align: center;
}

.details-wrap {
  -webkit-flex: 1;
  overflow-y: scroll;
}

.details-banner {
  height: 4.6rem;
  background-color: #fff;
}
.details-banner img {
  width: 100%;
  height: 100%;
}

.details-title {
  height: 0.84rem;
  padding-left: .3rem;
  padding-right: .3rem;
  box-sizing: border-box;
  align-items: center;
  display: -webkit-box;
  -webkit-box-pack: center;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: .28rem;
  background-color: #fff;
}

.details-price {
  height: 1.1rem;
  padding-left: .3rem;
  padding-right: .3rem;
  box-sizing: border-box;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .16rem;
  background-color: #fff;
}
.details-price .price {
  display: -webkit-flex;
  -webkit-flex-direction: column;
  justify-content: center;
}
.details-price .price p:first-child {
  color: #fc4141;
  font-size: .3rem;
  font-weight: 600;
}
.details-price .price p:first-child a {
  text-decoration: line-through;
  color: #ccc;
  font-weight: 400;
}
.details-price .price p:last-child {
  color: #999;
  font-size: .24rem;
}
.details-price .queryBtn {
  width: 2rem;
  height: 0.8rem;
  line-height: .8rem;
  font-size: .3rem;
  text-align: center;
  border-radius: .04rem;
  background-color: #4f99f2;
  color: #fff;
}

.on-sale {
  line-height: .72rem;
  padding-left: .3rem;
  padding-right: .3rem;
  box-sizing: border-box;
  background-color: #fff;
}
.on-sale .on-sale-btn {
  display: inline-block;
  width: 1.04rem;
  line-height: .34rem;
  text-align: center;
  border-radius: .04rem;
  border: .01rem solid #fc4141;
  color: #fc4141;
  margin-right: .13rem;
  font-size: .2rem;
}
.on-sale span:last-child {
  font-size: .26rem;
}

.shop {
  height: 1.14rem;
  margin-top: .2rem;
  margin-bottom: .2rem;
  background-color: #fff;
  display: -webkit-flex;
  align-items: center;
  padding-left: .3rem;
  padding-right: .3rem;
  box-sizing: border-box;
}
.shop dt {
  font-size: .6rem;
  color: #ff6d1f;
  margin-right: .1rem;
}
.shop dd {
  -webkit-flex: 1;
  position: relative;
  font-size: .24rem;
}
.shop dd p:first-child {
  margin-bottom: .14rem;
}
.shop dd span {
  position: absolute;
  right: 0;
  top: 0.02rem;
  width: 1.84rem;
  line-height: 0.7rem;
  text-align: center;
  border-radius: .04rem;
  border: .01rem solid #333333;
}

.details-footer {
  background-color: #fff;
}
.details-footer ul {
  display: -webkit-flex;
}
.details-footer ul li {
  height: 1.2rem;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .24rem;
}
.details-footer ul li:nth-child(1), .details-footer ul li:nth-child(2) {
  background-color: #fff;
  -webkit-flex: 2;
}
.details-footer ul li:nth-child(1) span, .details-footer ul li:nth-child(2) span {
  margin-top: .1rem;
}
.details-footer ul li:nth-child(3) {
  -webkit-flex: 3;
  background-color: #fe8282;
  color: #fff;
}
.details-footer ul li:nth-child(4) {
  -webkit-flex: 3;
  background-color: #fc4141;
  color: #fff;
}


</style>


