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
    changeName(e, nextParam){
      this.name= e.target.value + ' ' + nextParam
    },
    submitForm(e){
      e.preventDefault();
      console.log(e.target)
    },
    confirmInput(e){
      this.name = e.target.value;
    }
       
  }
});

app.mount('#events');
