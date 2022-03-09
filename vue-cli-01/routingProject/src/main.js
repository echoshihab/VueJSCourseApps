import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';

const TeamsList = () => import('./components/teams/TeamsList.vue');
const UsersList = () => import('./components/users/UsersList.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList},
        { path: '/users', component: UsersList} //our-domain.com/teams => ...
    ]
});

const app = createApp(App)
app.use(router);

app.mount('#app');
