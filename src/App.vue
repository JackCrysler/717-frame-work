<template>
  <div id="app">
    <router-view></router-view>
    <nav>
      <router-link :to="{name:'home'}" tag="span">
        <em class="icon iconfont icon-home"></em>
        <sub>首页</sub>
      </router-link>

      <router-link :to="{name:'catagory'}" tag="span">
        <em class="icon iconfont icon-catagory"></em>
        <sub>分类</sub>
      </router-link>

      <router-link :to="{name:'cart'}" tag="span">
        <em class="icon iconfont icon-cart"></em>
        <sub>购物车</sub>
      </router-link>

      <router-link :to="{name:'mine'}" tag="span">
        <em class="icon iconfont icon-my"></em>
        <sub>我的</sub>
      </router-link>


    </nav>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#app>div {
  flex: auto;
}

nav {
  height: 0.98rem;
  text-align: center;
  display: table;
  width: 100%;
  border-top: 1px solid #eee;
}

nav span {
  display: table-cell;

}
nav .icon{
  font-size: 0.46rem;
}
nav em,nav sub{
  display: block;
  width: 100%;
}

nav .icon {
  height: 0.5rem;
}
</style>
