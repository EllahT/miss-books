export default {
    template: `
            <header>
                <h1>Welcome to Miss Book</h1>
                <nav>
                    <router-link exact to="/">Home</router-link> | 
                    <router-link to="/about">About</router-link> |
                    <router-link exact to="/book">Books</router-link> 
                </nav>
                
            </header>    
    
    `
}