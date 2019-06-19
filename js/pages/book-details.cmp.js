import bookDescription from '../cmps/book-description.cmp.js';
import bookReviews from '../cmps/book-reviews.cmp.js';
import bookService from '../services/book.service.js';
import utilService from '../services/util.service.js';

export default {
    
    template: `
        <div class="book-details" v-if="book">
            <div class="book-details-header">
                <h3>{{book.title}}</h3>
                <h4>{{book.subtitle}}</h4>
                <ul class="sub-list">
                    <li>by</li>
                    <li v-for="author in book.authors">
                        {{author}} 
                    </li>
                </ul>
                <h4 :class="priceClass">{{price}}</h4>
                <ul class="sub-list">
                    <li>categories: </li>
                    <li v-for="category in book.categories">
                        {{category}}
                    </li>
                </ul>
                <span>language: {{book.language}}</span>
            </div>

            <ul class="sub-list tags">
                <li v-if="isBookOnSale"><img class="sale-img" src="img/sale.png"></li>
                <li class="bordered">{{literalPageCount}}</li>
                <li class="bordered" v-if="literalPublishDate">{{literalPublishDate}}</li>
            </ul>
            
            <img class="book-img" :src="book.thumbnail"/>

            <book-description :desc="book.description"></book-description>

            <book-reviews @addReview="saveReview" @deleteReview="deleteReview" :bookId="book.id"></book-reviews>

            <button class="back-btn" @click="backtoBookList">Back to book list</button>
            
        </div>
    `,

    data() {
        return {
            book: null,
            showCard: false
        }
    },

    created() {
        const bookId = this.$route.params.theBookId;
        bookService.getBookById(bookId)
            .then(book => this.book = book)
    },
    
    computed: {
        literalPageCount() {
            return (this.book.pageCount < 100)? 'Light Reading' : (this.book.pageCount < 500)? 'Long Reading' : 'Decent Reading';
        },

        literalPublishDate() {
            const currYear = new Date().getFullYear();
            return (this.book.publishedDate >= (currYear-1))? 'New!' : (this.book.publishedDate < (currYear -10))? 'Veteran Book' : '';
        },

        priceClass() {
            if (Object.keys(this.book).length === 0) return;
            return (this.book.listPrice.amount < 20)? 'cheap' : (this.book.listPrice.amount > 150)? 'expensive' : '';
        }, 

        isBookOnSale() {
            if (Object.keys(this.book).length === 0) return;
            return this.book.listPrice.isOnSale;
        },

        price() {
            return utilService.priceForDisplay(this.book.listPrice.amount, this.book.listPrice.currencyCode);
        }
    },
    
    methods: {
        deSelectBook() {
            this.$emit('deSelect','please');
        },

        backtoBookList() {
            this.$router.push('/book');
        },

        saveReview(review) {
            bookService.addReview(this.book.id, review);
        },

        deleteReview(reviewId) {
            bookService.removeReview(this.book.id,reviewId);
        },
    },

    components: {
        bookDescription,
        bookReviews
    }
}
