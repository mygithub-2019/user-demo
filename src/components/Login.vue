<template>
   <div>
      <form action="/action_page.php">
        <div v-if='!isUserValid'>
         <div class="form-group input" :class="{invalid: $v.userName.$error}">
            <label for="userName">User Name</label>
            <input type="text" class="form-control" id="userName"
                v-model="userName"
                placeholder="Please enter user name"
                @blur="$v.userName.$touch()">
                <div  :class="{invalid: $v.userName.$error}" 
                    v-if="$v.userName.$error">User name can't be lessthan 6 letters.</div>
            <!-- <p>{{ $v }}</p> -->
         </div>
         <div class="form-group input" :class="{invalid: $v.pwd.$error}">
            <label for="pwd">Password</label>
            <input type="password" class="form-control input" id="pwd"
                v-model="pwd"
                placeholder="Please enter password"
                @blur="$v.pwd.$touch()">
                <div  :class="{invalid: $v.pwd.$error}" 
                    v-if="$v.pwd.$error">Password can't be lessthan 6 letters.</div>
          <!-- <p>{{ $v }}</p> -->
         </div>
         <div class="form-group form-check">
            <label class="form-check-label">
            <input class="form-check-input" type="checkbox">{{ rememberMeMsg }}
            <span @click="newUser">{{ newRegistrationMsg }}</span>
            </label>
         </div>
         <button @click.prevent="login" 
            :disabled="$v.$invalid"
            class="btn btn-primary">Login</button>
        </div>
         <div v-if='isUserValid' class="alert alert-success">
            <strong>Login Success!</strong>
        </div><br>
        <div v-if='isUserRegistered' class="alert alert-danger">
            <strong>User not found. Please register to login.</strong>
        </div>
      </form>
   </div>
</template>

<script>
import axios from 'axios';
//Validation
import {  
    required, email, numeric, 
    minValue, minLength, sameAs,
    requiredUnless} from 
  'vuelidate/lib/validators';
import { debug } from 'util';

export default {
    data(){
        return{
            rememberMeMsg: ' Remember me',
            newRegistrationMsg: 'Are you new user? register here.',
            users: [],
            userName: '',
            pwd: '',
            isUserValid: false,
            isUserRegistered: false
        }
    },
    methods:{
        newUser(){
            //this.$emit('emitNewUser', true);
            this.$router.push('/registration');
        },
        login(){
            var _userStatus = this.checkUser();
            if(_userStatus){
                this.isUserValid = true;
                this.$router.push('/dashboard');
            }else{
                this.isUserRegistered = true;
            }
        },
        checkUser(){
            var _users = this.users;
            var _userFound = false;
            for(var _user in _users){
                if(_users[_user].name === this.userName && atob(_users[_user].pwd) === this.pwd){
                    //this.isUserValid = true;
                    _userFound = true;
                    break;
                }else{
                    continue;
                }
            }
            return _userFound;
        }
    },
    validations:{
            pwd:{
                required,
                minLength: minLength(6)
            },
            userName:{
                required,
                minLength: minLength(6)
            }
        },
    created(){
        axios.get('https://users-825fd.firebaseio.com/users.json')
            .then(res => {
                this.users = res.data;
            }) 
            .catch(error => {
                console.log(error);
            });
    }
    // ,
    // beforeRouteLeave(to, from, next){
    //     next(this.isUserValid);
    // }
}
</script>

<style lang="scss" scoped>
span {
  color: #42b983;
  cursor: pointer;
}
span:hover {
  color: #37a5ee;
}
.input.invalid label {
  color: red;
}
.input.invalid div{
  color: red;
}
.input.invalid input{
  border: 1px solid red;
}
</style>


