import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        cart_list:[
            
        ]
    },
    mutations:{
        update_cart(state,data){
            if(data){
                state.cart_list = [...data]
            }
            
        },
        add_to_cart(state,data){
            
            let flag = false;
            state.cart_list.forEach((item,index)=>{
                if(item.id==data.id){
                    item.count++
                    flag=true
                }
            })
            if(!flag){
                state.cart_list.push(data) 
            }  
        },
        change_count(state,arr){
            state.cart_list.forEach((item,index)=>{
                if(item.id == arr[0]){
                    item.count = arr[1]
                }
            })
        },
        selected_item(state,arr){
            state.cart_list.forEach((item,index)=>{
                if(item.id==arr[0]){
                    item.selected = arr[1]
                }
            })
        },
        check_all(state,bool){
            state.cart_list.forEach((item)=>{
                item.selected = bool
            })
        },
        delete_item(state,arr){
            console.log(arr);
            let ar=state.cart_list;
            //state.cart_list
            for(let i=0; i<ar.length; i++){
                for(let j=0;j<arr.length;j++){
                    if(ar[i].id==arr[j]){
                        ar.splice(i,1)
                        i--;
                    }
                }
            }
            

        }
    },
    actions:{
        add_to_cart(){

        }
    },
    getters:{
        get_selected(state){
            let count=0;
            state.cart_list.forEach((item,index)=>{
                if(item.selected){
                    count+=item.price*item.count
                }
                
            })


            return count.toFixed(2)
        }
    }
})

export default store