const STARS_COUNT =5;

export default {
    template: `
    <div class="stars-rating">
        <ul class="stars-list">
            <li v-for="(star, index) in stars">
                <i class="star fa fa-star" :class="{'active-star': star.isFilled}"
                   @mouseover="viewAsActive(index)"
                   @click="changeRate(index)"
                   @mouseout="changeRate(index)"></i>
            </li>
        </ul>
    </div>
    `,

    props: ['rate'],

    data() {
        return {
            stars: null
        }
    },

    created() {
        this.stars = [];
        for (var i = 0; i < STARS_COUNT; i++) {
            this.stars.push({
                id: i,
                isFilled: i < this.rate
            });
        }
    },

    methods: {
        changeRate(index) {
            this.$emit('changedRate', index+1);
        },

        viewAsActive(index) {
            this.stars.map((star, index) => star.isFilled = i <= index);
        }
    }
}