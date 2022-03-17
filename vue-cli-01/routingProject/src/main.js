import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';


import App from './App.vue';

const TeamsList = () => import('./components/teams/TeamsList.vue');
const UsersList = () => import('./components/users/UsersList.vue');
const TeamMembers = () => import('./components/teams/TeamMembers.vue');
const NotFound = () => import('./components/nav/NotFound.vue');
const TeamsFooter = () => import('./components/teams/TeamsFooter.vue');
const UsersFooter = () => import('./components/users/UsersFooter.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        { 
            name: 'teams', 
            path: '/teams', 
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
         { name: 'team-members', path: ':teamId', component: TeamMembers, props: true},
        ]},
        { 
            path: '/users', 
            components: {default: UsersList, footer: UsersFooter}},

        { path: '/:notFound(.*)', component: NotFound}
         //our-domain.com/teams => ...
    ]
});

const app = createApp(App)
app.use(router);

app.mount('#app');
