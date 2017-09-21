<template>
    <transition>
        <div class="tips" v-show="active">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    props: ['active'],
    data() {
        return {
        }
    },
    methods: {
        show: function() {

        }
    }
}
</script>
<style>
.tips {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(0, 0, 0, 0.7);
    height: 0.88rem;
    width: 80%;
    border-radius: 5px;
    line-height: 0.88rem;
    color: #fff;
    text-align: center;
}

.v-enter,
.v-leave-to {
    opacity: 0;
}

.v-enter-to,
.v-leave {
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease-in;
}
</style>

