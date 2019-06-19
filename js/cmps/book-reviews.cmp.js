import newReview from '../cmps/add-new-review.cmp.js';
import bookService from '../services/book.service.js';

export default {
    template: `
    <section class="reviews" v-if="reviews">
        <h1>Reviews</h1>
        <button @click="changeShowForm" v-scroll-to="'#addingForm'">Add Review</button>
        <h4 v-if="!reviews.length"> be the first to review this book!</h4>
        <ul v-if="reviews.length">
            <li class="reiview-item" v-for="review in reviews">
                <button class="deleteBtn" @click="emitDeleteReview(review.id)">x</button>
                <h4>rate: {{review.rate}}</h4>
                <h4>name: {{review.fullName}}</h4>
                <h4>read the book at: {{review.readAt}}</h4>
                <p>{{review.content}}</p>
            </li>
        </ul>
        
        <new-review v-if="showForm" @saveReview="emitSaveReview"></new-review>
    </section>
`,
    props: ['bookId'],

    data() {
        return {
            reviews: null,
            showForm: false
        }
    },

    created() {
        bookService.getReviews(this.bookId)
            .then((reviews) => { 
                this.reviews = reviews;
            })
    },
    
    methods: {
        emitSaveReview(review) {
            this.$emit('addReview',review);
            this.changeShowForm();
        },

        emitDeleteReview(reviewId) {
            this.$emit('deleteReview',reviewId);
        },

        changeShowForm() {
            this.showForm = !this.showForm;
        }
    },

    components: {
        newReview
    }
}
