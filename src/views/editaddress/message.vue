<template>
    <div class="message">
        <masker-layer :isActive="show"></masker-layer>
        <tips :active='tips_active'>{{tip_info}}</tips>
        <header class="head">
            <i class="iconfont icon-back" @click="back"></i>
            <span>收货地址</span>
            <i class="iconfont icon-home"></i>
        </header>
        <section>
            <input type="text" placeholder="收货人姓名" v-model="name" ref='name'>
            <input type="text" placeholder="手机号" v-model="phone">
            <p class="select">
                <select v-model="province">
                    <option value="1">请选择省</option>
                    <option v-for="x in list" :value="x.name">{{x.name}}</option>
                </select>
                <select v-model="city">
                    <option value="1">请选择市</option>
                     <option v-for="x in city_list" :value="x.name">{{x.name}}</option>
                </select>
            </p>

            <select class="district" v-model="area">
                <option value="1">请选择区</option>
                 <option v-for="x in area_list" :value="x">{{x}}</option>
            </select>
            <input type="text" placeholder="详细地址" v-model="site">
            <span class="default"><i>√</i>设为默认地址</span>
            <button class="save" @click="save">保存</button>
        </section>
        
    </div>
</template>

<script>

import masker from '../../components/loading.vue';
import token from '../../utils/getcookie.js'
import tips from '../../components/tips.vue'
console.log(masker)
export default {
    data() {
        return {
            name:"",
            phone:"",
            site:"",
            title:"",
            show:false,
            list:[],
            city_list:[],
            area_list:[],
            city:'',
            province:'',
            area:'',
            tips_active:false,
            tip_info:''
        }
    },
    components: {
        "masker-layer": masker,
        'tips':tips
    },
    created(){
        this.show = true;

        let get_address_info = new Promise((resolve,reject)=>{
            this.$http.post('/get_address_info').then((res)=>{
                
                resolve(res.data.data)
                
            })
        })
        let edit_address_info = new Promise((resolve,reject)=>{
            let id = this.$route.params.id
            this.$http.get('/edit_delivery_info',{id:id,token:token()}).then((res)=>{
                resolve(res.data)
                
            })
        })

        Promise.all([get_address_info,edit_address_info]).then((res)=>{
            this.list = res[0];
            console.log(res);
            this.name = res[1].name;
            this.phone = res[1].phone;
            this.province = res[1].province;
            this.city = res[1].city;
            this.area = res[1].area;
            this.site = res[1].street;
            this.show=false
        })
    },
    watch:{
        'province':function (params) {
            console.log(params)
            let lists = this.list;
            if(lists.length>0){

                lists.forEach((item)=>{
                    if(item.name == params){
                        this.city_list = item.city;
                    }
                })

            }
        },
        'city':function(params){
            let lists = this.city_list;
            if(lists.length>0){

                lists.forEach((item)=>{
                    if(item.name == params){
                        this.area_list = item.area;
                    }
                })


            }
        }   
    },
    methods: {
        back() {
            history.go(-1)
        },
        tips(info){
            this.tips_active = true;
            setTimeout(()=> {
                    this.tips_active = false
                }, 1500);
            this.tip_info=info;
        },
        save(){
            let reg_phone=/^1[34578]\d{9}$/;
            let str="";
            let that = this;
            if(!this.name){
                 this.$modal.show({
                     title:'提示信息',
                     info:'请输入姓名',
                     callback:function(){
                         that.$refs.name.focus()
                     }
                 })
                return;
            }
            if(!this.phone || !reg_phone.test(this.phone)){
                this.tips('请输入正确的手机号')
                return; 
            }
            if(!this.province){
                this.tips('请选择省份')
                return
            }
            if(!this.city){
                this.tips('请选择城市')
                return
            }
            if(!this.area){
                this.tips('请选择区域')
                return
            }
            if(!this.site){
                this.tips('请填写详细地址')
                return
            }
            
            this.$http.post('/add_new_address',{
                name:this.name,
                phone:this.phone,
                province:this.province,
                city:this.city,
                area:this.area,
                street:this.site,
                token:token()
            }).then((res)=>{
                console.log(res)
            })

            this.$router.replace("/addresslist")
            
        }
    }
}
</script>

<style scoped>
.dia{
    position: absolute;
    top:40%;
    left:20%;
}
.default{
    display: block;
    padding-left:.3rem;
    margin-top:.3rem;
}
.default i{
    font-style: normal;
    display: inline-block;
    width:.5rem;
    height: 0.5rem;
    line-height: .5rem;
    text-align: center;
    border:1px solid #ccc;
    border-radius:50%;
    margin-right:.2rem;
    color:#fff;
    background:red;
}
.save{
    width:60%;
    height:.8rem;
    background: red;
    border:none;
    border-radius:.45rem;
    color:#fff;
    font-size: .32rem;
    margin-left: 20%;
    margin-top:.6rem;
    outline: none;
}
.message {
    width: 100%;
    height: 100%;
    background: #eee;
}

.head {
    width: 100%;
    height: .85rem;
    background: #fff;
    line-height: .85rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .3rem;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    background: #fff;
}

.icon-home {
    display: inline-block;
    width: .6rem;
    height: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: .6rem;
    margin-top: 5px;
}

section {
    width: 100%;
}

input {
    width: 92%;
    background: #fff;
    border: none;
    height: .8rem;
    margin-left: 5%;
    margin-top: .3rem;
    padding-left: .2rem;
}

select {
    width: 40%;
    height: .7rem;
    border: none;
    padding-left:.2rem;
}
.select{
    display:flex;
    justify-content: space-between;
    padding:0 .3rem;
    margin-top:.28rem;
}
.district{
    width:90%;
    margin-left:5%;
    margin-top:.28rem;
}
</style>
