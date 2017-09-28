import { Dialog as dialog } from './dialog';

class AwsomeDialog extends dialog {
    constructor() {
        super()
    }

    show(options = { title: '这里是title', info: '这是提示信息' }) {
        this.init(options);//io 浏览器渲染机制

        this.container.addEventListener('click', function (e) {
            e.stopPropagation()
        })

        this.layout.addEventListener('click', () => {
            this.hide()
        })

        setTimeout(() => {
            this.layout.classList.add('layout-active');
            this.container.classList.add('dialog-container-active');

        }, 0)

    }

    hide() {

        this.layout.classList.remove('layout-active');
        this.container.style.transform = 'translate3d(-50%, -50%, 0) scale(0.8)';
        this.container.style.opacity = '0.2';

        //transitionEnd animationEnd 动画执行结束触发的事件
        let that = this;
        const l = new Promise(function (resolve) {
            that.layout.addEventListener('webkitTransitionEnd', function () {
                resolve('layout end')
            })
        })

        const c = new Promise(function (resolve) {
            that.container.addEventListener('webkitTransitionEnd', function () {
                resolve('container end')
            })
        })

        let a = Promise.all([l, c]);
        a.then(function (data) {
            console.log(data)
            document.querySelector('body').removeChild(that.layout);
        })
    }
}

export { AwsomeDialog }


export var test = "hello this beautiful world......";

//封装自定义的select组件 



