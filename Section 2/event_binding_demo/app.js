const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
    };
    
  },
  methods:{
    add(num){
      this.counter = this.counter+ num;
    },
    reduce(num){
      this.counter = this.counter-num
    },
    changeName(e){
      this.name= e.target.value
    },
    submitForm(e){
      e.preventDefault();
      console.log(e.target)
    },
    confirmInput(e){
      this.name = e.target.value;
    },
    resetInput(){
      this.name = '';
    }
       
  }
});

app.mount('#events');
