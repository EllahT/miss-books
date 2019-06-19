import bookService from '../services/book.service.js';
import eventBus, { SHOW_MSG } from '../event-bus.js'

export default {
    template: `
    <section class="add-books">
        <div class="add-books-header">
            <h1>Search Books</h1>
            <form class="searcForm" @submit.prevent="searchBooks">
                <input type="text" v-model="searchTxt"/>
                <button class="submitBtn" :disabled="invalid">Search</button>
            </form>
        </div>

        <template v-if="books">
            <button @click="clearList">Clear</button>
            <ul class="search-res">
                <li v-for="book in books">
                    {{book.volumeInfo.title}}
                    <button @click="addBook(book)">+</button>
                </li>
            </ul>
        </template>

    </section>
`,

    data() {
        return {
            searchTxt: '',
            books: null
        }
    },

    computed: {
        invalid() {
            return !this.searchTxt;
        }
    },

    methods: {
        searchBooks() {
            bookService.getGoogleBooks(this.searchTxt)
                .then((res) => this.books = res);
        },

        addBook(book) {
            bookService.addGoogleBook(book)
                .then((id) => {
                    eventBus.$emit(SHOW_MSG,
                        {txt: 'book was added to your list!', type: 'success' ,bookId: id});
                })
        },

        clearList() {
            this.books = null;
            this.searchTxt= '';
        }
    }, 
}
