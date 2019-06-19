import utilServies from '../services/util.service.js';
import starsRating from '../cmps/stars-rating.cmp.js';

export default {
    template: `
    <section class="add-new-review">
        <form id="addingForm" @submit.prevent="emitNewReview">
            <div class="form-item">
                <label>Full Name</label>
                <input ref="fullNameInput" type="text" v-model="review.fullName"/>
            </div>

            <div class="form-item">
                <label>Rate</label>
                <stars-rating @changedRate="changeRate" :rate="review.rate"></stars-rating>
            </div>

            <div class="form-item">
                <label>Read At</label>
                <input type="date" v-model="review.readAt"/>
            </div>

            <div class="form-item required-field">
                <label>Your Review</label>
                <textarea v-model="review.content" placeholder="tell us what you thought about the book" required></textarea>
            </div>

            <button class="submitBtn" :disabled="invalid">Save</button>
        </form>
    </section>
`,

    data() {
        return {
            review: {
                id: utilServies.makeId(),
                fullName: 'Books Reader',
                rate: null,
                readAt: utilServies.getTodayAsInputVal(),
                content: ''
            }
        }
    },

    mounted() {
        this.$refs.fullNameInput.focus();
    },

    computed: {
        invalid() {
            return !this.review.content;
        }
    },

    methods: {
        emitNewReview() {
            this.$emit('saveReview',this.review);
        },

        changeRate(rate) {
            this.review.rate = rate;
        }
    }, 

    components: {
        starsRating
    }
}
