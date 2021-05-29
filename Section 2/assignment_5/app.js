const app = Vue.createApp({
    data(){
        return{
            task: '',
            tasks: [],
            display: true
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