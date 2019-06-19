'use strict'

import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })

import appHeader from './cmps/app-header.cmp.js'

var app = new Vue({
    el: '#app',
    created() {
        console.log('App has been Mounted');
    },
    template: `
        <div>
            <app-header></app-header>
            <router-view></router-view>
            <footer></footer>
        </div>
    `,
    components: {
        appHeader
    },
    router: myRouter
    
})