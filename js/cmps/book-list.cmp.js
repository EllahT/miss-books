import bookPreview from './book-preview.cmp.js'

export default {
    template: `
        <section>
            <ul class="book-list">
                <book-preview v-for="currBook in books" :book="currBook" :key="currBook.id" @selected="passSelected">
                </book-preview>
            </ul>
        </section>
    `,

    props: ['books'],

    data() {
        return {

        }
    },

    computed: {

    },

    methods: {
        passSelected(book) {
            this.$emit('selected',book);
        }
    },

    components: {
        bookPreview
    }

    
}
