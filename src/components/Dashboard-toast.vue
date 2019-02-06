<template>
    <div>
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            </ul>
        </div>
        </nav>
        <h1>{{ title }}</h1>
        <button @click="logOut">Log out</button>
        <div id="snackbar">Some text some message..</div>
        <button @click="myFunction">Show Snackbar</button>
    </div>
</template>
<script>
import userinfo from './store'
export default {
    data(){
        return{
            title: 'Dash-Board in-progress'
        }
    },
    beforeRouteLeave(to, from, next){
        console.log('beforeRouteLeave-Dashboard', userinfo);
        if(userinfo.userinfo.isUserLoggedIn){
            next('/dashboard');
        }else{
            next('/');
        }
    },
    // beforeRouteEnter(to, from, next){
    //     console.log('beforeRouteEnter: ',userinfo.userinfo.getUserData());
    //     // console.log('beforeRouteLeave-Dashboard', userinfo);
    //     // if(userinfo.userinfo.isUserLoggedIn){
    //     //     next('/dashboard');
    //     // }else{
    //     //     next('/');
    //     // }
    // },
    methods:{
        logOut(){
            userinfo.userinfo.setUserData(false);
            console.log(userinfo.userinfo.getUserData());
        },
        myFunction(){
            var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
    }
}
</script>
<style lang="scss" scoped>
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: rgb(236, 18, 18);
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>


