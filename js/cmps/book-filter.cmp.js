export default {
    template: `
        <section class="book-filter">
            <h1>Books Filter</h1>
            
            <div class="filters">
                <div class="filter-by-title">
                    <h3>By Title</h3>
                    <input @keyup.enter="emitFilter" type="text" v-model="filterBy.title" placeholder="enter a book title or a part of it"/>
                </div>

                <div class="filter-by-range">
                    <h3>By Price Range</h3>
                    <label>from</label>
                    <input @keyup.enter="emitFilter" type="number" v-model="filterBy.priceRange.fromPrice" placeholder="enter the lowest price"/>
                    <label>to</label>
                    <input @keyup.enter="emitFilter" type="number" v-model="filterBy.priceRange.toPrice" placeholder="enter the highest price"/>
                </div>
            </div>
            <button @click="emitFilter">Filter</button>
            <button @click="emitShowAll">Show All</button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                priceRange: {fromPrice: null, toPrice: null}
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy);
            this.filterBy = {
                title: '',
                priceRange: {fromPrice: null, toPrice: null}}
        },

        emitShowAll() {
            this.$emit('showAll', 'please');
        }
    }
}

