
import homepageCmp from './pages/homepage.cmp.js';
import aboutCmp from './pages/about.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import bookDetails from './pages/book-details.cmp.js';

export default [
    { path: '/', component: homepageCmp },
    { path: '/about', component: aboutCmp },
    { path: '/book', component: bookApp },
    { path: '/book/:theBookId', component: bookDetails },
]
