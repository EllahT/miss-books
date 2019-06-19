import bookService from '../services/book.service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js'

export default {
    template: `
        <section class="book-app">
            <book-filter class="filter" @filtered="setFilter" @showAll="clearFilter"></book-filter>
            <book-list :books="booksToShow" @selected="selectBook"></book-list>            
        </section>
    `,
  

    data() {
        return {
            filter: null,
            books: [],
            selectedBook: {}
        }
    }, 
    
    created() {
        console.log('book app was created');
        bookService.query()
            .then(books => this.books = books);
    },

    computed: {
        isThereSelectedBook() {
            return Object.keys(this.selectedBook).length;
        },

        booksToShow() {
            let filteredBooks = this.books;
            const filter = this.filter;
            
            if (filter) {
                let minPrice = (filter.priceRange.fromPrice === null)? 0 : +filter.priceRange.fromPrice;
                let maxPrice = (filter.priceRange.toPrice === null)? 10000000 : +filter.priceRange.toPrice;
    
                filteredBooks = this.books.filter (book => {
                        if (!book.title.includes(filter.title)) return false;
                        if (minPrice > book.listPrice.amount) return false;
                        if (maxPrice < book.listPrice.amount) return false;
                        
                        return true;
                    })
                }
            return filteredBooks;
        }
    },

    methods: {
        setFilter(filter) {
            this.filter = filter;
        },

        clearFilter() {
            this.filter = null;
        },

        selectBook(book) {
            this.selectedBook = book;
        },

        deleteSelectedBook() {
            this.selectedBook = {};
        }
    },

    components: {
        bookList,
        bookFilter
    }
}
