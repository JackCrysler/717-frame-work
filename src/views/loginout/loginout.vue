<template>
    <div class="loginout">
        <button @click="loginout">退出登录</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods:{
            loginout:function () {
                let cookie_str = document.cookie;
                console.log(cookie_str)
                //dfghjkl;pgv_pvid=3758419816; 1505B-tocken=15805658192;adsadasd

                let arr =cookie_str.split(';');
                arr.forEach((item,index)=>{
                    if(item.indexOf('1505B')>-1){
                        arr.splice(index,1)
                    }
                })
                function setCookie(cname, cvalue, exdays) {  
                    var d = new Date();  
                    d.setTime(d.getTime() + (exdays*24*60*60*1000));  
                    var expires = "expires="+d.toUTCString();  
                    document.cookie = cname + "=" + cvalue + "; " + expires;  
                }  
                setCookie('1505B-tocken','',-1);
                this.$router.replace({
                    name:'mine'
                })
            }
        }
    }
</script>
<style lang="" scoped>
      button{
          padding:10px 30px;
      }  
      .loginout{
          text-align:center;
          line-height: 200px;
      }
</style>