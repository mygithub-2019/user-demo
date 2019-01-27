<template>
  <div id="app">
    <div class="col-lg-4 container-fluid">
      <app-login 
        v-if='!isNewUserRegistration' 
        @emitNewUser='newUserRegistration'></app-login>
      <app-register 
        v-if='isNewUserRegistration'
        @goToLogin='showLogin'></app-register>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Register from './components/Registration.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isNewUserRegistration: false
    }
  },
  components:{
    appLogin: Login,
    appRegister: Register
  },
  methods:{
    newUserRegistration(data){
      this.isNewUserRegistration = data;
    },
    showLogin(data){
      this.isNewUserRegistration = !this.isNewUserRegistration;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7c7f80;
  margin-top: 15%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
