export default {
    template: `
    <div class="stars-rating">
        <ul class="stars-list">
            <li v-for="(star, index) in stars">
                <i class="star fa fa-star" :class="{'active-star': star.isFilled}" @mouseover="viewAsActive(index)" @click="changeRate(index)"></i>
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
        let stars = [];
        for (var i = 0; i < 5; i++) {
            const isFilled = (i < this.rate)? true : false;
            const star = {id: i, isFilled: isFilled};
            stars.push(star);
        }

        this.stars = stars;
    },

    methods: {
        changeRate(index) {
            this.$emit('changedRate', index+1);
        },

        viewAsActive(index) {
            for (var i = 0; i <= index; i++) {
                this.stars[i].isFilled = true;
            }

            for (var i = index+1; i < 5; i++) {
                this.stars[i].isFilled = false;
            }
        }
    }
}