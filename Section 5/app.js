const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
    <p>{{message}}</p>
    <p>{{favoriteMeal}}</p>
    <input type="text" ref="userText">
    <button @click="setText">Set Text</button>
  `,
  data(){
    return {
      currentUserInput: '',
      message: 'App2 Message',
      favoriteMeal : "Pizza"
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      this.message = this.$refs.userText.value
    },
  }
});

app2.mount('#app2');

