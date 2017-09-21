<template>
  <div class="classify">
    <div class="hea">
      <input class="inp1" type="text" placeholder="输入您要购买的商品" @focus="go_to_search">
      <i class="iconfont refer ic1">&#58972;</i>
      <div class="iconfont ic2">&#59177;</div>
    </div>
    <ul class="sidebar">

      <li v-for="(x,i) in catagory_list" :key="i">
        <router-link :to="{name:'catagory',params:{index:i}}" tag="span"><i class="iconfont lis">&#59052;</i>{{x.title}}</router-link>
        </li>
    </ul>
    <div class="fenlei">
      <dl v-for="x in catagory_content" :key="x.id">
        <router-link :to="{name:'shop'}" tag="span">
        <dt><img :src="x.pic"></dt>
        <dd>{{x.name}}</dd>
        </router-link>
      </dl>
    </div>
    <masker-layer :isActive="masker_active"></masker-layer>
  </div>
</template>
<script>
import masker from '../../components/loading.vue';
export default {
  data() {
    return {
      masker_active: true,
      catagory_list:[],
      catagory_content:[]
    }
  },
  watch:{
    "$route":function(n,o){
      let idx = n.params.index;
      if(this.catagory_list[idx])this.catagory_content = [...this.catagory_list[idx].items]
    }
  },
  computed:{

  },
  methods:{
    go_to_search:function(){
      this.$router.push({name:'search'})
    }
  },
  components: {
    "masker-layer": masker
  },
  created() {
    this.$http.post('/h5/mtop.relationrecommend.wirelessrecommend.recommend').then((res)=> {
      this.catagory_list = [...res.data.data.result[0].moduleList];
      this.catagory_content = [...this.catagory_list[0].items]
      this.masker_active = false
    })
  }
}
</script>
<style scoped>
.classify {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hea {
  width: 100%;
  height: .90rem;
  position: relative;
}

.inp1 {
  width: 70%;
  height: 59%;
  background: #f6f6f6;
  border: 0;
  margin-top: 3%;
  margin-left: 12%;
  text-indent: 1.5rem;
  border-radius: 3%;
  font-size: .27rem;
}

.ic1 {
  position: absolute;
  top: 30%;
  left: 26%;
  font-size: .30rem;
}

.ic2 {
  position: absolute;
  top: 23%;
  right: 6%;
  font-size: .35rem;
}

.sidebar {
  width: 105px;
  height: 100%;
  background: #eee;
  flex-direction: column;
  position: relative;
  float: left;
}

.sidebar li {
  width: 100%;
  height: .65rem;
  text-align: center;
  line-height: .65rem;
  font-size: .23rem;
}

.lis {
  position: absolute;
  left: .05rem;
}

.pop {
  background: #fff;
  color: red;
}

.fenlei {
  width: 75%;
  height: 100%;
  margin-left: 25%;
}

.fenlei dl {
  width: 70px;
  height: 110px;
  float: left;
  margin-top: 20px;
  margin-left: 20px;
}

.fenlei dl dt {
  width: 100%;
  height: 70px;
}

.fenlei dl dt img {
  width: 100%;
  height: 100%;
}

.fenlei dl dd {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: .25rem;
}
</style>
