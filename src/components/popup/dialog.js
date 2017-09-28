import './dialog.css';


class Dialog {
    constructor() {

        this.show = this.show.bind(this);

    }

    tpl(options) {

        let { title, info } = options;

        return `
                
                    <div class="dialog-container">
                        <div class="dialog-title">${title}</div>
                        <div class="dialog-content">${info}</div>
                        <div class="dialog-btns">
                            <button class="certain">确定</button><button class="cancel">取消</button>
                        </div>
                    </div>
                
                `
    }

    createElement(type, props = { class: '' }, text = '') {
        let el = document.createElement(type);
        for (let key in props) {
            el.setAttribute(key, props[key])
        }
        el.innerHTML = text
        return el
    }

    bindEvent(callback) {
        this.layout.querySelector('.certain').addEventListener('click', () => {
            this.hide();
            callback && callback('弹出框被关闭了')
        })
        this.layout.querySelector('.cancel').addEventListener('click', () => {
            this.hide()
        })
    }

    init(options) {
        let layout = document.querySelector('.layout');
        let body = document.querySelector('body');
        //console.log(options)
        if (!layout) {
            this.layout = layout = this.createElement('div', { class: 'layout' }, this.tpl(options));
            this.container = this.layout.querySelector('.dialog-container');
            this.bindEvent(options.callback)
            body.appendChild(layout)

        } else {

        }
    }

    show(options = { title: '这里是title', info: '这是提示信息' }) {
        this.init(options);

        //reset css
        this.layout.style.background = 'rgba(0,0,0,0.7)';
        this.container.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
        this.container.style.opacity = '1';

    }

    hide() {
        document.querySelector('body').removeChild(this.layout);
    }

}


export {Dialog};