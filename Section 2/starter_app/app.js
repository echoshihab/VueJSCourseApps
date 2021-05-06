//initiate Vue App
const app = Vue.createApp({
    //data key is mandatory
    data(){
        return {
            //we can make reference to this content in html using
            //interpolation syntax
            courseGoalA: "Finish the course and learn vue!",
            courseGoalB: "<em>Master Vue and build amazing apps!</em>",
            vueLink: 'https://vuejs.org'
        };
    },
    //methods is a reserved term
    methods:{
        //this name can be anything we want
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5 ){
                return this.courseGoalA;
            } 
            return this.courseGoalB;

            
        }
        //why this? it takes all returned data and merges into global vue instance
    }
});

//connect to user-goal section of html by css selector
app.mount("#user-goal");

