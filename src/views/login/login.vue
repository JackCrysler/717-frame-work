<template>
<div>
 	<div class="login" v-if="is_login">
        <div class="head">
          <i class="icon iconfont icon-back" @click="back_home"></i>
          <p>登录会员</p>
          <span @click="go_to_register">注册</span>
        </div>
        <div class="content">
          <ul class="int_list">
            <li>
              <i class="icon iconfont icon-people"></i><input v-model="login_phone" type="text" placeholder="请输入您的手机号">
            </li>
            <li>
              <i class="icon iconfont icon-form"></i><input v-model="login_password" type="text" placeholder="请输入您的密码">
            </li>
          </ul>
          <div class="loadbtn">
            <span @click="login">立即登录</span>
          </div>
        </div>
    </div>
  <div class="register" v-else>
      <div class="head">
        <i class="icon iconfont icon-back" @click="back_home"></i>
        <p>注册会员</p>
        <span @click="go_to_login">登录</span>
      </div>
      <div class="content">
        <ul class="int_list">
          <li>
            <i class="icon iconfont icon-people"></i><input type="text" placeholder="请输入您的手机号" v-model.trim="phone_number">
          </li>
          <li class="certify">
           <i class="icon iconfont icon-apps"></i><input type="text" placeholder="请输入验证码" v-model.trim="verify_code">
           <span  class="get_certify" @click="get_verifycode">获取验证码</span>
         </li>
          <li>
            <i class="icon iconfont icon-form"></i><input type="password" placeholder="请输入您的密码" v-model.trim="password">
          </li>
        </ul>
        <div class="certain">
          <span @click="register">确定</span>
        </div>
      </div>
  </div>
  </div>
</template>
<script>

//import tips from '../../components/tips.vue'

export default {
  	data(){
  		return {
           is_login:true,
           phone_number:'',
           verify_code:'',
           password:'',
           login_phone:'',
           login_password:''
        }
  	},
  	components:{
  		
  	},
    methods:{
      back_home(){
          this.$router.push('/home')
      },
      go_to_register(){
          this.is_login = false
      },
      go_to_login(){
          this.is_login = true
      },
      get_verifycode(){
          this.$http.post('/verifycode',{pn:this.phone_number}).then(function(params) {
              console.log(params)
          })
      },
      register(){
          this.$http.post('/register',{
              phone_number:this.phone_number,
              verify_code:this.verify_code,
              password:this.password
        }).then((params)=> {
              this.is_login = true
          })
      },
      login(){
          this.$http.post('/login',{
              phone:this.login_phone,
              password:this.login_password
          }).then((res)=>{
              console.log(res.data);
              document.cookie = "1505B-tocken="+res.data.tocken
              this.$router.push({name:'mine'})
          })
      }
    }
}
</script>
<style scoped>
.login,.register{
	width:100%;
	height: 100%;
	overflow: hidden;
  background: #eee;
  display: flex;
  flex-direction: column;
}
.head{
	height: .88rem;
	line-height: .88rem;
	display: flex;
	justify-content: space-between;
	padding:0 10px;
	font-size: .34rem;
	background:#fff;
	border-bottom: 1px solid #eee;
  margin-bottom: .2rem;
}
.head p{
	text-align: center;
	color:#333;	
}
.head span{
  font-size: .26rem;
  color:#F02424;
}
.head .icon{
	font-size: .32rem;
	text-align: center;
}

.content {
  overflow-y: scroll;
  flex: 1;
  background: #eee;
}
.int_list{
  padding:0 10px;
  background: #fff;

}
.int_list input{
  border:none;
  background:none;
  outline:none;
}
.int_list li{
  height: 1.2rem;
  line-height:1.2rem;
  border-bottom: 1px solid #eee;
  color:#333;
  font-size: .28rem;
  display: flex;
}
.int_list li .iconfont{
  font-size: .5rem;
  margin-right: 5px;
}

.loadbtn,.certain{
    padding-top: 1rem;
}
.loadbtn span,.certain span{
  display: block;
  width:80%;
  margin:0 auto;
  background:#F02424;
  color:#fff;
  font-size: .36rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: .5rem;
  box-shadow: 1px 3px 3px 0px #FD7E7E;
}

.certify{
  position: relative;
}
.get_certify{
  width:2rem;
  height: .8rem;
  display: block;
  color:#F02424;
  line-height: .8rem;
  text-align: center;
  border-radius: .4rem;
  border:1px solid #F02424;
  position: absolute;
  right:0;
  top:.2rem;
}

</style>
