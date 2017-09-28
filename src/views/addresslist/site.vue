<template>
    <div class="siteModel">
        <tips :active="active">删除成功！</tips>
        <header class="head">
            <i class="icon iconfont icon-back" @click="back"></i>
            <span>收货地址</span>
            <i class="icon iconfont icon-home"></i>
        </header>
        <section>
            <ul class="uls">
                <li v-for="x in add_list">
                    <span class="name_phone">{{x.name}}<b>{{x.phone}}</b></span>
                    <small class="site">{{x.province+' '+x.city+' '+x.area}}</small>
                    <p class="default">
                        <span class="dui"><i>✔</i>设为默认</span>
                        <span class="cancel">
                            <span @click="edit(x.id)"><i class="iconfont icon-send"></i>编辑</span>
                             <span @click="delete_info(x.id)"><i class="iconfont icon-apps"></i>删除</span>   
                        </span>
                    </p>
                </li>
            </ul>
            <button class="add" @click="add">+新增加地址</button>
        </section>
    </div>
</template>

<script>
import token from '../../utils/getcookie.js'
import tips from '../../components/tips.vue'
export default {
    data(){
        return {
            add_list:[],
            active:false
        }
    },
    created(){
        
        this.$http.post('/get_address_list',{token:token()}).then(res=>{
            console.log(res.data)
            this.add_list = res.data;
            //
        })
    },
    components:{
        tips:tips
    },
    methods:{
        add(){
            this.$router.push({
                name:'editaddress'
            })
        },
        edit(id){
            this.$router.push({
                name:'editaddress',
                params:{
                    id:id
                }
            })
        },
        delete_info(id){
            this.$http.get('/delete_delivery_info',{id:id,token:token()}).then(res=>{
                
                let idx;
                if(res.data =='success'){

                    this.active = true;
                    setTimeout(()=> {
                        this.active = false
                    }, 1000);

                    this.add_list.forEach((item,index)=>{
                        if(item.id == id){
                            idx=index
                        }
                    })
                    this.add_list.splice(idx,1);
                    
                    
                }
            })
        },
        back(){
            history.go(-1)
        }
    }
}
</script>

<style scoped>
    .siteModel{
        width:100%;
        height:100%;
        background: #f5f5f5;
    }
    .uls{
        width:100%;
        background: #fff;
    }
    .uls li{
        min-height:2rem;
    }
    .name_phone{
        display:block;
        padding-top:.28rem;
        font-size: .3rem;
        padding-left:.3rem;
    }
    .name_phone b{
        font-weight: normal;
        padding-left:.3rem;
    }
    .site{
        display: block;
        color:#666;
        padding-left:.3rem;
        margin-top:.2rem;
    }
    .default{
        width:100%;
        margin-top:.28rem;
        line-height: .8rem;
        border-top:1px solid #eee;
        padding-left:.3rem;
        display:flex;
        justify-content: space-between;
        padding-right:.2rem;
        color:#666;
    }
     .dui {
         font-size: 14px;
     }
    .dui i{
        display: inline-block;
        font-style:normal;
        width:.5rem;
        height: 0.5rem;
        border-radius:50%;
        margin-right:.2rem;
        border:1px solid #ccc;
        line-height: .5rem;
        text-align: center;
        font-size:.32rem;
        background: red;
        color:#fff;
    }
    .cancel i{
        padding:0 .2rem;
    }

    .add{
        width:70%;
        height:.85rem;
        background:red;
        border:none;
        border-radius:.55rem;
        color:#fff;
        font-size:.29rem;
        margin-left: 15%;
        margin-top:.8rem;
        outline: none;
    }


    .head{
        width:100%;
        height:.85rem;
        background: #fff;
        line-height: .85rem;
        display: flex;
        justify-content: space-between;
        padding:0 .3rem;
        border-bottom:1px solid #ccc;
        font-size: 14px;
    }
    .icon-home{
        display: inline-block;
        width:.6rem;
        height: 0.6rem;
        border:1px solid #ccc;
        border-radius:50%;
        text-align: center;
        line-height: .6rem;
        margin-top:5px;
    }
</style>
