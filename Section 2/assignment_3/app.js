const app = Vue.createApp({
    data(){

        return {
            total: 0
        }
    },
    computed:{
        displayMessage(){
            if(this.total < 37)
            {
                return "Not there yet"
            } 
            else if(this.total > 37)
            {
                return "Too Much"
            }
            else{   
                return this.total
            }
        }
    },
    watch:{
        displayMessage(){
            let that = this;
            setTimeout(()=>that.total=0, 5000)
            console.log(that.total)
        }

    },
    methods:{
        add(num){
            this.total += num;
        }
        

    }
});

app.mount("#assignment");