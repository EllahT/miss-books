import utilService from '../services/util.service.js'

export default { 
    template: `
        <li @click="selectBook" v-show="showBook">
            <router-link :to="bookUrl">    
                <h4><span class="title">Title: </span> {{book.title}}</h4>
                <h4><span class="title">Price: </span>{{price}}</h4>
                <img :load="changeShowBook" class="book-img" :src="book.thumbnail"/>
            </router-link>
        </li>
    `,
    
    props: ['book'],

    data() {
        return {
            showBook: false,
        }
    },

    computed: {
        price() {
            return utilService.priceForDisplay(this.book.listPrice.amount, this.book.listPrice.currencyCode);
        },

        changeShowBook() {
            this.showBook = true;
        },

        bookUrl() {
            return '/book/' + this.book.id;
        }
    },

    methods: {
        selectBook() {
            this.$emit('selected',this.book);
       }
    },
    

}
