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
            meta: {needsAuth: true},
            components: {default: TeamsList, footer: TeamsFooter},
            children: [
         { name: 'team-members', path: ':teamId', component: TeamMembers, props: true},
        ]},
        { 
            path: '/users', 
            components: {default: UsersList, footer: UsersFooter},
            beforeEnter(to, from, next){
                console.log("this is coming from before users route only");
                console.log(to, from);
                next();
            }},
    
        { path: '/:notFound(.*)', component: NotFound}
         //our-domain.com/teams => ...
    ], 
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }
        return {
            left: 0,
            top: 0
        }
    }
});

router.beforeEach(function(to, from, next){
    console.log('Global for each')
    console.log(to, from);
    if(to.meta.needsAuth){
        console.log('needs auth');
        next();
    } else {
        next();
    }
});

// router.afterEach(function(to,from) {
//     console.log("coming from " + from.fullPath)
//     console.log("to" + to.fullPath)
// })

const app = createApp(App)
app.use(router);

app.mount('#app');
