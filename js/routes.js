
import homepageCmp from './pages/homepage.cmp.js';
import aboutCmp from './pages/about.cmp.js';
import bookApp from './pages/book-app.cmp.js';
import bookDetails from './pages/book-details.cmp.js';

const aboutVision = {
    template: `
    <div>
        <h1>Our Vision</h1>
        <img class="about-image" src="img/vision.jpg"/>
    </div>`
}

const aboutTeam = {
    template: `
    <div>
        <h1>Our Team</h1>
        <img class="about-image" src="img/team.jpg"/>
    </div>`
}

export default [
    { path: '/', component: homepageCmp },
    { path: '/about', component: aboutCmp, children: [
        {path: 'vision', component: aboutVision},
        {path: 'team', component: aboutTeam}
    ] },
    { path: '/book', component: bookApp },
    { path: '/book/:theBookId', component: bookDetails },
]
