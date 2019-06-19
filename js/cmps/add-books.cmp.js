import bookService from '../services/book.service.js';

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

        <ul class="search-res" v-if="books">
            <li v-for="book in books">
                {{book.volumeInfo.title}}
                <button @click="addBook(book)">+</button>
            </li>
        </ul>

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
            bookService.addGoogleBook(book);
        }
    }, 
}
