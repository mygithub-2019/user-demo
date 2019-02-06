import Vue from 'vue';
import Vuex from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        idToken: null,
        userId: null
    },
    actions:{
        signUp({commit}, authData){

        },
        login({commit}, authData){

        }
    },
    mutations:{
        authUser(state, userData){
            state.idToken = userData.token;
            state.userId = userData.userId;
        }
    },
    getters:{

    }
});