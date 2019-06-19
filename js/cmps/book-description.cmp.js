export default {
    
    template: `
        <div class="book-desc">
            <div>{{txtToShow}}</div>
            <button v-if="buttonTxt" @click="toggleLength">{{buttonTxt}}</button>
        </div>
    `,
    
    props: ['desc'],
    
    data() {
        return {
            showFullDesc: false
        }
    },

    computed: {
        txtToShow() {
            return (this.desc.length > 100)? ((this.showFullDesc)? this.desc : this.desc.slice(100,this.desc.length)) : this.desc;
        },

        buttonTxt() {
            return (this.desc.length > 100)? ((this.showFullDesc)? 'Read Less' : 'Read More') : '';
        }
    },

    methods: {
        toggleLength() {
            console.log('entered')
            this.showFullDesc = !this.showFullDesc;
        }
    }
}