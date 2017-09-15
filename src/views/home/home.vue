<template>
    <div>
        <header>

            <input type="text" @focus="go_to_search">
        </header>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {

        }
    },
    methods:{
        go_to_search(){
            this.$router.push('/search')
        }
    }
}
</script>
<style>

</style>

