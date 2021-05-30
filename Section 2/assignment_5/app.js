const app = Vue.createApp({
    data(){
        return{
            task: '',
            tasks: [],
            display: true
        }
    },
    computed:{
        showButtonText(){
            return this.display ? 'Hide' : 'Show List'
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.task)
            this.task= ''
        },
        toggleDisplay(){
            this.display = !this.display
        }

    }
})

app.mount("#assignment")