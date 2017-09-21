<template>
    <div class="mask" :class="{'active':isActive}">
        <!-- <img src="../assets/loading.gif" alt=""> -->
        <div class="sk-spinner sk-spinner-double-bounce">
            <div class="sk-double-bounce1"></div>
            <div class="sk-double-bounce2"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mask-view',
    props: ['isActive'],
    mounted() {
        //this.isActive = this.$store.state.mask_active
    },
    methods: {

    }
}
</script>
<style>
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: none;
    justify-content: center;
    align-items: center;
}

.active {
    display: flex;
}

.sk-spinner-double-bounce.sk-spinner {
    width: 40px;
    height: 40px;
    position: relative;
    margin: 0 auto;
}

.sk-spinner-double-bounce .sk-double-bounce1,
.sk-spinner-double-bounce .sk-double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: sk-doubleBounce 2s infinite ease-in-out;
    animation: sk-doubleBounce 2s infinite ease-in-out;
}

.sk-spinner-double-bounce .sk-double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
}

@-webkit-keyframes sk-doubleBounce {
    0%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes sk-doubleBounce {
    0%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>
