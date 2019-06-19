import eventBus, {SHOW_MSG} from '../event-bus.js';
var timeout;

export default {
    template: `
        <section class="user-msg" :class="msg.type" v-if="msg">
            <button @click="closeMsg">x</button>
            <h3>{{msg.txt}}</h3>
            <router-link :to="link">Go To Book Page</router-link> 
        </section>
    `,
    data() {
        return {
            msg: null
            // msg: {
            //     txt: 'testing testing testing',
            //     type: 'success',
            //     bookId: 'GXj93KOkqZoC'
            // }
        }
    },
    created() {
        eventBus.$on(SHOW_MSG, (msg)=>{
            this.msg= msg
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(()=>this.msg=null, 3000)
        })
    },

    computed: {
        link() {
            return '/book/'+this.msg.bookId
        }
    },

    methods: {
        closeMsg() {
            this.msg = null;
        }
    }
}