var interval;

export default {
    template: `
        <section class="about">
            <transition name="roll" type="animation" appear>
                <h1>This is us!</h1>
            </transition>

            <transition name="bounce" type="animation" appear>
                <img class="about-image" src="img/thisisus.jpg"/>  
            </transition>

            <transition name="fade" type="animation" appear>
                <p class="about-txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae reprehenderit magni corrupti, animi quidem pariatur sunt quos maxime, quo culpa quia aliquid? Ullam dicta magni blanditiis illum dolore iste nobis!</p>
            </transition>

            <div class="sub-about">
                <router-link to="/about/vision">Our Vision</router-link> | 
                <router-link to="/about/team">Our Team</router-link>
                <router-view></router-view>
            </div>

        </section>
    `,

    created() {
        interval = setInterval(()=> {
            console.log('this is the interval speaking, HEY!#%^@');
        },1000)
    },

    destroyed() {
        clearInterval(interval);
    }
} 




