const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
    };
    
  },
  computed:{
    fullname(){
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'lastname';
    }
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
    },
    outputFullName(){
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'lastname';
    }
       
  }
});

app.mount('#events');
