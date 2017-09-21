<template>
  <dl @click="go_to_shop">
      <dt><img :src="url"></dt>
        <dd>
            <div class="Products">{{name}}</div>
            <div>
                <span><em>￥</em>{{price}}</span>
                <span class="icon iconfont icon-cart right" @click.stop="add_to_cart"> </span>
            </div>
        </dd>
  </dl>
</template>
<script>
import tips from './tips.vue';
export default {
    props:['url','name','price','id'],
    methods:{
        add_to_cart:function(){
            this.$http.post('/user/Cart/addCart',{goods_id:123,key_code:123}).then((res)=>{
                console.log(res.data)

                if(res.data==1){
                    let data = {
                        id:this.id,
                        price:this.price,
                        name:this.name,
                        count:1,
                        url:this.url,
                        selected:false
                    }

                    this.$store.commit('add_to_cart',data)

                    this.$emit('tips-active',true)   
                }
                setTimeout(()=>{
                    this.$emit('tips-active',false)   
                },1200)
            })
        },
        go_to_shop(){
            this.$router.push({name:'shop',query:{
                id:this.id
            }})
        }
    }
  
}
</script>
<style>
    .right{
        float: right;
        margin-right: 10px;
    }
</style>

