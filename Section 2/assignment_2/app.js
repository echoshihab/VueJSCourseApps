const app = Vue.createApp({
    data(){
        return{
            inputText: "",
            inputTextOnEnter: ""
        }
    },
    methods: {
        showAlert(){
            alert("Hey, this is an alert");
        },
        registerInput(e){
            this.inputText = e.target.value;
        },
        registerInputOnEnter(e)
        {
            this.inputTextOnEnter = e.target.value;
        }

    }

})

app.mount("#assignment");
