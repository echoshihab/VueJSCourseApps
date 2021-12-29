const app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id: 'ava',
                    name: 'Ava Adams',
                    phone: '111 111 1111',
                    email: 'ava@test.com'
                },
                {
                    id: 'Pam',
                    name: 'Pam Day',
                    phone: '222 222 2222',
                    email: 'pam@test.com'
                },
            ],
        };
    },
    

});

app.component('friend-contact', {
    template: `
    <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">{{detailsAreVisible ? "Hide" : "Show"}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
        <li>
    `,
    data() {
    return { 
        detailsAreVisible : false,
        friend: {
                    id: 'ava',
                    name: 'Ava Adams',
                    phone: '111 111 1111',
                    email: 'ava@test.com'
                }
            };
        },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible; 
        }
    }
});

app.mount('#app');