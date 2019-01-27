<template>
   <div>
      <form>
        <h3>{{ newUserRegistration }}</h3>
         <div class="form-group">
            <label for="name">User Name</label>
            <input type="name" class="form-control" id="name"
                v-model="userData.name">
         </div>
         <div class="form-group">
            <label for="pwd">Password</label>
            <input type="password" class="form-control" id="pwd"
                v-model="userData.pwd">
         </div>
         <div class="form-group">
            <label for="cnfpwd">Confirm Password</label>
            <input type="password" class="form-control" id="cnfpwd"
                v-model="userData.cnfpwd">
         </div>
         <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email"
                v-model="userData.email">
         </div>
         <button @click.prevent="register" class="btn btn-primary">Register</button>
         <button @click.prevent="gotToLogin" class="btn btn-primary">Go To Login</button>
      </form>
   </div>
</template>
<script>
import axios from 'axios';

export default {
    //props:[propIsRegDone],
    data(){
        return{
            newUserRegistration: 'New User Registration',
            pwd: '',
            cnfpwd: '',
            userData:{
                name: "",
                pwd: btoa(this.pwd),
                cnfpwd: btoa(this.cnfpwd),
                email: ""
            }
        }
    },
    methods:{
        gotToLogin(){
            this.$emit('goToLogin', true);
        },
        register(){
            debugger;
            axios.post('https://users-825fd.firebaseio.com/users.json', this.userData)
                .then(res => {
                    this.resetFormData();
                })
                .catch(e => {
                    consol.log(e);
                });
        },
        resetFormData(){
            this.name = '';
            this.pwd = '';
            this.cnfpwd = '';
            this.email = '';
        }
    }
}
</script>
<style lang="scss" scoped>
h3{
    color: #42b983;
}
</style>

