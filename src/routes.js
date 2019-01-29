import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Registration from './components/Registration.vue';

// const Login = resolve => {
//     require.ensure(['./components/Login.vue'], () => {
//         resolve(require('./components/Login.vue'));
//     }, 'user')
// }
// const Registration = resolve => {
//     require.ensure(['./components/Registration.vue'], () => {
//         resolve(require('./components/Registration.vue'));
//     }, 'user')
// }
// const Dashboard = resolve => {
//     require.ensure(['./components/Dashboard.vue'], () => {
//         resolve(require('./components/Dashboard.vue'));
//     }, 'user')
// }
export const routes = [
    {path: '/', component: Login},
    {path: '/registration', component: Registration},
    {path: '/dashboard', component: Dashboard},
    {path: '*', redirect: '/'}
]

