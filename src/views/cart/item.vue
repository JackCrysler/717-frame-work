<template>
    <div class="list_b">
        <div class="btns icon iconfont" :class="{'icon-check':selected}" @click="select_fn"></div>
        <div class="imgs"><img :src="info.url" alt=""></div>
        <div class="info">
            <p class="text">{{info.name}}</p>
            <div class="price_btn">
                <div class="price_left">
                    <b>×{{item_count}}</b>
                    <p><span>¥ </span>{{info.price}}</p>
                </div>
                <div class="count_b">
                    <span class="reduce icon iconfont icon-move" @click="minus"></span>
                    <span class="count">{{item_count}}</span>
                    <span class="plus icon iconfont icon-add" @click="add"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['info','select_all'],
    data() {
        return {
            selected: false,
            item_count:1
        }
    },
    created(){
        //this.selected = this.$store.
    },
    methods: {
        select_fn(idx) {
            this.selected = !this.selected;
        },
        add(){
            this.item_count++;
            this.$store.commit('change_count',[this.info.id,this.item_count])
            
        },
        minus(){
            this.item_count--;
            this.$store.commit('change_count',[this.info.id,this.item_count])
        }
    },
    watch:{
        select_all:function(n){
            this.selected = n;
        },
        selected:function(n){
            this.$store.commit('selected_item',[this.info.id,n])
        }
    },
    mounted(){
        this.item_count = this.info.count
    }
}
</script>
<style scoped>

.list_b {
	width: 100%;
	display: flex;
    align-items: center;
    
	height: 2.62rem;
	background: #fff;
	margin-bottom: 0.2rem;
	border-bottom: solid 0.02rem #e5e5e5;
	padding: 0.3rem 0.3rem 0.3rem 0.2rem;
}

.imgs {
	width: 2.04rem;
	height: 100%;
	overflow: hidden;
	border: solid 0.02rem #cccccc;
	margin-right: 0.2rem;
}

.imgs img {
	display: block;
	width: 100%;
}

.info {
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.1rem 0;
}

.text {
	width: 100%;
	line-height: 0.4rem;
	font-size: 0.22rem;
	color: #333;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	flex-shrink: 0;
}

.price_btn {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}

.price_left p {
	font-size: 0.3rem;
	line-height: 0.34rem;
	color: #fc4141;
}

.price_left p span {
	font-size: 0.26rem;
}

.price_left b {
	font-weight: normal;
	font-size: 0.26rem;
	line-height: 0.34rem;
	color: #666666;
}

.count_b {
	display: flex;
	justify-content: flex-end;
}

.count_b span {
	display: block;
	height: 0.62rem;
	border: solid 0.02rem #e4e4e4;
	width: 0.6rem;
	line-height: 0.6rem;
	text-align: center;
	font-size: 0.3rem;
}

.reduce {
	border-radius: 0.08rem 0 0 0.08rem;
}

.count {
	width: 0.9rem;
	border-right: none;
	border-left: none;
}

.plus {
	border-radius: 0 0.08rem 0.08rem 0;
}
.btns {
	width: 0.45rem;
	height: 0.45rem;
	font-size: 0.3rem;
	line-height: 0.42rem;
	border: solid 0.02rem #cccccc;
	border-radius: 50%;
	overflow: hidden;
	text-align: center;
	color: #fff;
	margin-right: 0.12rem;
}

.icon-check {
	background: #fc4141;
}
</style>
