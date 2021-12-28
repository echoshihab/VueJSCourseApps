const app = Vue.createApp({
    data(){
        return {
            detailsAreVisible: false,
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
    methods: {
        toggleDetails(){
           this.detailsAreVisible = !this.detailsAreVisible; 
        }
    }

});


app.mount('#app');