<template>
   <div>
      <form>
        <h3>{{ newUserRegistration }}</h3>
         <div class="form-group cls-validation" :class="{invalid: $v.name.$error}">
            <label for="name">User Name</label>
            <input type="name" class="form-control" id="name" 
                placeholder="Please enter user name"
                v-model="name"
                @blur="$v.name.$touch()">
            <div  :class="{invalid: $v.name.$error}" 
                    v-if="$v.name.$error">User name can't be lessthan 6 letters.</div>    
         </div>
         <div class="form-group cls-validation" :class="{invalid: $v.pwd.$error}">
            <label for="pwd">Password</label>
            <input type="password" class="form-control" id="pwd"
                placeholder="Please enter password"
                v-model="pwd"
                @blur="$v.pwd.$touch()">
            <div  :class="{invalid: $v.pwd.$error}" 
                v-if="$v.pwd.$error">Password can't be lessthan 6 letters.</div> 
         </div>
         <div class="form-group cls-validation" :class="{invalid: $v.cnfpwd.$error}">
            <label for="cnfpwd">Confirm Password</label>
            <input type="password" class="form-control" id="cnfpwd"
                placeholder="Please enter same as password"
                v-model="cnfpwd"
                @blur="$v.cnfpwd.$touch()">
            <div  :class="{invalid: $v.cnfpwd.$error}" 
                v-if="$v.cnfpwd.$error">Confirm Password didn't match with Password.</div>
         </div>
         <div class="form-group cls-validation" :class="{invalid: $v.email.$error}">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email"
                placeholder="Please enter valid email"
                v-model="email"
                @blur="$v.email.$touch()">
            <div v-if="!$v.email.email">Please enter a valid email</div>
            <!-- <div v-if="$v.email.$error">Email can't be empty</div> -->
            {{$v}}
         </div>
         <button @click.prevent="register"  
            :disabled="$v.$invalid"
            class="btn btn-primary">Register</button>
         <button @click.prevent="gotToLogin" class="btn btn-primary">Go To Login</button>
      </form>
   </div>
</template>
<script>
import axios from 'axios';
import {  
    required, email, numeric, 
    minValue, minLength, sameAs,
    requiredUnless} from 
  'vuelidate/lib/validators';
export default {
    //props:[propIsRegDone],
    data(){
        return{
            newUserRegistration: 'New User Registration',
            pwd: "",
            cnfpwd: "",
            name: "",
            email: ""
        }
    },
    validations:{
        name:{
            required,
            minLength: minLength(6)
        },
        pwd:{
            required,
            minLength: minLength(6)
        },
        cnfpwd:{
            same: sameAs('pwd')
        },
        email:{
            required,
            email
        }
    },
    methods:{
        gotToLogin(){
            this.$emit('goToLogin', true);
        },
        getUserFormData(){
            return{
                name: this.name,
                pwd: btoa(this.pwd),
                cnfpwd: btoa(this.cnfpwd),
                email: this.email
            }
        },
        register(){
            debugger;
            axios.post('https://users-825fd.firebaseio.com/users.json', this.getUserFormData())
                .then(res => {
                    this.resetFormData();
                    this.gotToLogin();
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
.cls-validation.invalid label {
  color: red;
}
.cls-validation.invalid div{
  color: red;
}
.cls-validation.invalid input{
  border: 1px solid red;
}
</style>

