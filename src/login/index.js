export default function(Vue) {
    Vue.component('tms-login', {
        props: {
            mode: { type: String, default: "static" },
            title: { type: String },
            display: {
                type: Object,
                default: () => {
                    return { nickname: true, password: true }
                }
            },
            modalWidth: { type: String, default: '400px' },
            modalHeight: { type: String, default: '300px' }
        },
        data() {
            return {
                user: {
                    'nickname': '',
                    'password': ''
                }   
            }
        },
        methods: {
            submit() {
                this.$emit('submit', this.user)
            },
            computedPosition(num) {
                return parseInt(num / 2)
            },
        },
        computed: {
            wrapStyle() {
                if (this.mode === 'absolute') {
                    let modalPositionLeft =  this.computedPosition(parseInt(this.modalWidth)) + "px"
                    let modalPositionTop =  this.computedPosition(parseInt(this.modalHeight)) + "px"
                    let styles = {
                        "position" : "absolute",
                        "width": this.modalWidth,
                        "height": this.modalHeight,
                        "top": "50%",
                        "left": "50%",
                        "background-color": "#f5f5f5",
                        "margin-left": "-" + modalPositionLeft,
                        "margin-top": "-" + modalPositionTop,
                        "padding": "10px"
                    }
                    return styles

                } else {
                    return {}
                }
            }
        },
        render() {
            let slots = this.$slots
            let { title } = this.$props   
            let display = this.display
            let wrapStyle = this.wrapStyle    

            return (
                <div class="tms-login" {...{style: wrapStyle}}>
                    <div class="tms-login__header">{slots.title ? slots.title : title}</div>
                    {display.nickname ? (
                        <div class="tms-login__input">{slots.nickname ? slots.nickname : <input type="text" placeholader="用户名"  vModel={this.user.nickname}/>}</div>
                    ) : (
                        ''
                    )}
                    {display.password ? (
                        <div class="tms-login__input">{slots.password ? slots.password : <input type="password" placeholader="密码" vModel={this.user.password}/>}</div>
                    ) : (
                        ''
                    )}
                    <div class="tms-login__button">{slots.button ? slots.button : <button onClick={this.submit}>登录</button>}</div>
                </div>
            )
        }
    })
}