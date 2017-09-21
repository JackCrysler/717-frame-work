<template>
    <div class="homes">
        <header class="header">
            <span><img src="../../assets/1.png"></span>
            <input type="text" @focus="go_to_search" placeholder="请输入您要购买的商品">
            <div class="oo">
                <i class="iconfont">&#58998;</i>
                <p>我的店铺</p>
            </div>
            <div class="oo">
                <i class="iconfont">&#59018;</i>
                <p>消息</p>
            </div>
        </header>
        <main class="main" @scroll="can_i_query && load_more()" ref="main">
            <div class="main-wrap">
                <div class="swiper-container">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide"><img src="../../assets/1.jpg"></li>
                        <li class="swiper-slide"><img src="../../assets/2.jpg"></li>
                        <li class="swiper-slide"><img src="../../assets/3.jpg"></li>
                        <li class="swiper-slide"><img src="../../assets/4.jpg"></li>
                    </ul>
                    <div class="swiper-pagination"></div>
                </div>

                <div class="icon-lists">
                    <div class="icon-lists-top">
                        <dl>
                            <dt style="background: #47D265"><img src="../../assets/2.png"></dt>
                            <dd> 家乡味道</dd>
                        </dl>
                        <dl>
                            <dt style="background: #FF7902"><img src="../../assets/3.png"></dt>
                            <dd>进口食品</dd>
                        </dl>
                        <dl>
                            <dt style="background: #5BAAFF"><img src="../../assets/1.png"></dt>
                            <dd>牛奶乳品</dd>
                        </dl>
                        <dl>
                            <dt style="background: #FFB447"><img src="../../assets/4.png"></dt>
                            <dd>茶果冲引</dd>
                        </dl>
                    </div>
                    <div class="icon-lists-bot">
                        <dl>
                            <dt style="background: #FF655B"><img src="../../assets/3.png"></dt>
                            <dd>休闲零食</dd>
                        </dl>
                        <dl>
                            <dt style="background: #67CCFF"><img src="../../assets/1.png"></dt>
                            <dd>米面粮油</dd>
                        </dl>
                        <dl>
                            <dt style="background: #FFD33C"><img src="../../assets/4.png"></dt>
                            <dd>调味调料</dd>
                        </dl>
                        <dl>
                            <dt style="background: #5BDCC8"><img src="../../assets/2.png"></dt>
                            <dd>酒水新料</dd>
                        </dl>
                    </div>
                </div>
                <div class="dynamic-condition">
                    <div class="condition-one">商城动态</div>
                    <div class="condition-two">绿色无公害 无污染 无添加 天然有机素材源头吃的放心,健康第一,安全保证,确保蔬菜新鲜。</div>
                </div>
                <div class="special">
                    <div class="special-one">
                        <i class="iconfont">&#59010;</i>天天特惠</div>
                    <div class="special-two">每天都有惊喜</div>
                    <span class="even-more">更多
                        <i class="iconfont">&#59010;</i>
                    </span>
                </div>
                <div class="foodie">
                    <div class="foodie-left"><img src="../../assets/1.png"></div>
                    <div class="foodie-right">
                        <div class="foodie-right-top">

                            <img src="../../assets/3.png">
                        </div>
                        <div class="foodie-right-bottom">

                            <img src="../../assets/2.png">
                        </div>
                    </div>
                </div>
                <div class="Hometown-flavor">
                    <div class="flavor-h">
                        <span class="iconfont">&#59068;</span>家乡味道</div>
                    <div class="even-more">更多
                        <i class="iconfont">&#59001;</i>
                    </div>
                </div>
                <div class="flavors ks-clear">
                    <good-comp v-for="items in goods_list" :key="items.item_id" :id="items.item_id" :url="items.pic_path" :name="items.title" :price="items.originalPrice" @tips-active="tips_active"></good-comp>
                </div>
                <div class="loading">
                    {{is_finished}}
                </div>
            </div>

        </main>
        <tips-comp :active="active">添加成功</tips-comp>
    </div>
</template>
<script>
import axios from 'axios'
import good from '../../components/good.vue';
import tips from '../../components/tips.vue'
export default {
    name: 'home',
    data() {
        return {
            goods_list: [],
            can_i_query: true,
            channel_id: 1,
            is_finished: 'loading...',
            active: false
        }
    },
    components: {
        "good-comp": good,
        "tips-comp": tips
    },
    created() {
        axios.post('/mall/index/getGoodsChannel', { channel_id: this.channel_id }).then((res) => {

            this.channel_id++;
            this.goods_list = [...res.data.listItem]
        })
    },
    methods: {
        tips_active(data) {
            if (data) {
                this.active = true
            } else {
                this.active = false
            }
        },
        go_to_search() {
            this.$router.push('/search')
        },
        load_more() {
            let main = this.$refs.main;
            let total_height = main.querySelector('.main-wrap').offsetHeight;
            let main_height = main.offsetHeight;
            let scroll_top = main.scrollTop;

            if (total_height - scroll_top - main_height < 20) {
                console.log('到底了')
                this.can_i_query = false;
                axios.post('/mall/index/getGoodsChannel', { channel_id: this.channel_id }).then((res) => {
                    this.channel_id++;
                    this.goods_list = [...this.goods_list, ...res.data.listItem]
                    this.can_i_query = true;
                    if (this.channel_id >= 4) {
                        this.is_finished = '我是有底线的...'
                        this.can_i_query = false;
                    }

                })

            }

        }
    },
    mounted: function() {
        var mySwiper = new Swiper(".swiper-container", {
            autoplay: 2000,
            pagination: '.swiper-pagination',
            loop: true

        })
    }
}

</script>
<style>
@import url('./swiper/swiper.css');
* {
    margin: 0;
    padding: 0;
    font-size: .22rem;
    font-family: 微软雅黑;
}

.loading {
    line-height: 44px;
    text-align: center;
    background: #eee;
}

.homes {
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    -webkit-flex-direction: column;
}

.header {
    width: 100%;
    height: .90rem;
    background: #fff;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    align-items: center;
    display: flex;
}

.main {
    -webkit-flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
}

.header input {
    background: #F5F5F5;
    height: 50%;
    border: 0;
    width: 50%;
    text-indent: .7rem;
}

.header span {
    width: 12%;
    height: 40%;
}

.header span img {
    width: 100%;
    height: 100%;
}

.oo {
    text-align: center;
    color: #FC4141;
}

.swiper-container {
    width: 100%;
    height: 3rem;
}

.swiper-wrapper {
    width: 100%;
    height: 100%;
}

ul li img {
    width: 100%;
    height: 100%;
}

.icon-lists {
    width: 100%;
    height: auto;
    background: #fff;
}

.icon-lists .icon-lists-top,
.icon-lists .icon-lists-bot {
    width: 100%;
    display: flex;
}

.icon-lists .icon-lists-top dl,
.icon-lists .icon-lists-bot dl {
    flex: 1;
    text-align: center;
    margin: 0.1rem auto;
}

.icon-lists .icon-lists-top dl dt,
.icon-lists .icon-lists-bot dl dt {
    width: 0.9rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    background: #0086b3;
    border-radius: 50%;
    margin: 0 auto 0.1rem;
}





/*.icon-lists .icon-lists-top dl dt b,
    .icon-lists .icon-lists-bot dl dt b {
        color: #ffffff;
        font-weight: normal;
        font-size: 0.4rem;
    }*/

.icon-lists .icon-lists-top dl dd,
.icon-lists .icon-lists-bot dl dd {
    color: #333333;
    font-size: 0.22rem;
}

.icon-lists .icon-lists-top dl dt img,
.icon-lists .icon-lists-bot dl dt img {

    width: 100%;
    height: 100%;
}

.dynamic-condition {
    width: 95%;
    height: .70rem;
    margin-left: 2.5%;
    margin-top: 5%;
    position: relative;
    background: #fff;
}

.condition-one {
    width: 60px;
    height: 100%;
    margin: 0 0 0 0;
    color: #FF6D00;
    position: absolute;
    line-height: .35rem;
    letter-spacing: 5px;
    font-size: .27rem;
}

.condition-two {
    width: 85%;
    height: 100%;
    border: 1px solid #ccc;
    margin-left: 58px;
    border-radius: 3%;
}

.special {
    width: 100%;
    height: .70rem;
    border-top: 4px solid #eee;
    border-bottom: 4px solid #eee;
    margin-top: 10px;
    position: relative
}

.special-one {
    float: left;
    margin-right: 20px;
    margin-left: 2%;
    height: 100%;
    line-height: .60rem;
    font-size: 18px;
    color: #FF6D00;
}

.special-two {
    float: left;
    height: 100%;
    line-height: .60rem;
    font-size: 15px;
    color: #FF6D00;
}

.even-more {
    position: absolute;
    right: 5%;
    top: 15%;
}

.foodie {
    width: 100%;
    height: 3.5rem;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    border-bottom: 2px solid #eee;
}

.foodie-left {
    width: 50%;
    height: 100%;
    border-right: 6px solid #eee;
}

.foodie-right {
    width: 50%;
    height: 100%;
}

.foodie-left img {
    width: 100%;
    height: 100%;
}

.foodie-right-top {
    width: 100%;
    height: 50%;
    border-bottom: 5px solid #eee;
}

.foodie-right-top img {
    width: 100%;
    height: 100%;
}

.foodie-right-bottom {
    width: 100%;
    height: 50%;
}

.foodie-right-bottom img {
    width: 100%;
    height: 100%;
}

.Hometown-flavor {
    width: 100%;
    height: .70rem;
    border-top: 4px solid #eee;
    position: relative
}

.flavor-h {
    height: 100%;
    font-size: 18px;
    color: #FF6D00;
    text-align: center;
    line-height: .50rem;
    border-bottom: 6px solid #eee;
}

.flavors {
    width: 100%;
    height: auto;
}

.flavors dl {
    width: 50%;
    float: left;
    border-bottom: 6px solid #eee;
}

.flavors dl img {
    width: 100%;
    height: 100%;
}

.flavors dl dt {
    width: 100%;
    height: 65%;
}

.flavors dl dd {
    width: 100%;
    height: 35%;
    font-weight: 900;
    color: #FC4141;
    text-indent: .20rem
}

.flavors dl:nth-of-type(2n-1) {
    border-right: 2px solid #eee;
}

.flavors dl:nth-of-type(2n) {
    border-left: 2px solid #eee;
}

.flavors dl dd span {
    font-weight: 900;
    font-size: .35rem;
}

.Products {
    width: 100%;
    height: 0.78rem;
    overflow: hidden;
    color: #000;
    text-indent: 0;
    padding: 5px;
    line-height: 0.36rem;
}
</style>