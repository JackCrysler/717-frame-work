import Vue from 'vue'
import {AwsomeDialog} from '../components/popup/AwsomeDialog'
let Modal = {
    install(Vue,options){

        Vue.prototype.$modal = new AwsomeDialog()
    }
}

Vue.use(Modal)