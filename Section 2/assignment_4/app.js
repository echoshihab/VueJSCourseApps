const app = Vue.createApp({
    data(){
        return{
            userInput: '',
            state: true,
            backgroundColor: ''
        }
    
    },
    computed: {
        userInputClasses(){
                if (this.userInput === 'user1')
                {
                    return 'user1';
                }
                else if (this.userInput === 'user2')
                {
                    return 'user2';
                }
            
        },
     

    },

    methods:{
        switchClass(){
            console.log("Switching");
            this.state = !this.state;
        }

    }
})

app.mount("#assignment")