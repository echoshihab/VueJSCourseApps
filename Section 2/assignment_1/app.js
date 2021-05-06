const app = Vue.createApp({
    data(){
        return{
            myInfo: {
                firstName:"FirstName", 
                lastName: "LastName",
                age: '25',
                profileLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"
            },
            
            
        }
        
    },
    methods:{
        generateRandom(){
            return Math.random();
        }

    }
     
})

app.mount("#assignment")