<template>
   <div class="search-yu">
    <div class="heads">
      <span class="icon iconfont icon-search"></span>
          <input class="search-box" type="text" v-model.trim="search_words" placeholder=请输入您查找的商品><button class="search-btn" @click="search_product">搜索</button>
      </div>
      <div class="remove">
      最近搜索
      <span class="icon iconfont icon-deliver right"></span>
      </div>  
      <p v-if="no_records">暂无搜索记录...</p>
      <ul class="Recent-search" v-if="!no_records">
        <li v-for="(val,index) in sr_list" :key="index">{{val}}</li>
      </ul> 
      <div class="everyones">
        大家都在搜
      </div>
      <ol class="everyone">
        <li>蜂蜜</li>
        <li class="on">三黄鸡</li>
        <li>红酒</li>
        <li>红枣</li>
        <li>蜂蜜</li>
        <li>三黄鸡</li>
        <li class="on">红酒</li>
      </ol>            
   </div>
 
</template>
<script>
export default {
  data(){
    return {
      no_records:true,
      search_words:'',
      sr_list:[]
    }
  },
  methods:{
    search_product(){

      let words = this.search_words;
      if(!words) return;
      //向本地存储搜索数据
      let ls = window.localStorage;
      let arr = [];
      if(ls.getItem('search-records')){
        arr=[...JSON.parse(ls.getItem('search-records'))]
      }
      arr.push(words);  
      
      
      ls.setItem('search-records',JSON.stringify(arr))

      this.$router.push({
        name:'result'
      },words)

    }

  },
  created(){
    let sr = localStorage.getItem('search-records');
    if(!sr){
      this.no_records = true
    }else{
      this.sr_list = [...JSON.parse(sr)]
      this.no_records = false
    }
  }
}
</script>
<style>
input{
  outline: none;
}
.search-yu{
  width: 100%;
  height:100%;
 overflow: hidden;         
}
.heads{
  width: 100%;
  height: .70rem;
  position: relative
}
.heads .icon{
  position: absolute;
  top: 0.2rem;
    left: .5rem;
    font-size: 0.28rem;
}
.search-box{
  width:75%;
  height: 80%;
  background:#f6f6f6; 
  border:0;
  margin-top: 2%;  
  margin-left: 6%;
  text-indent: .6rem; 
  border-radius: 3%;
  font-size: .23rem;
}
.ico-s{
  position: absolute;
  left: 9%;
  top:36%;
}
.search-btn{
  width: 50px;
  height: 80%;
  border:0;
  background: #f6f6f6;
  margin-left: 5px;
  font-size: .22rem;
}
.remove{
  width: 100%;
  height: .60rem;
  font-size: .22rem;  
  line-height:.60rem;
  text-indent: 5.5%;    
}
.remove-iconfont{
  position: absolute;
  right:5%;
  font-size: .25rem;
  top:7%;
}
.Recent-search{
  width: 100%;
  height: 1.8rem; 
}
.Recent-search li{
  width: 70px;
  height: 30px;
  border:1px solid #ccc;
  border-radius: 5px;
  float: left;
  margin-top: 2%; 
  margin-left: 18px;
  text-align: center;
  line-height: 30px;
  font-size: .24rem;
  color:#666;
}
.everyone{
  width: 100%;
  height: 1.8rem; 
}
.everyone li{
  width: 70px;
  height: 30px;
  border:1px solid #ccc;
  border-radius: 5px;
  float: left;
  margin-top: 2%; 
  margin-left: 18px;
  text-align: center;
  line-height: 30px;
  font-size: .24rem;
  color:#666;
}
.on{
  color:#fd7171;
  border:#fd7171;
}
.everyones{
  width: 100%;
  height: .60rem;
  font-size: .22rem;  
  line-height:.60rem;
  text-indent: 5.5%;   
}
 

</style>

