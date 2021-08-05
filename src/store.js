import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import 'firebase/firestore' 
import 'firebase/functions'
import Axios from 'axios'
//import cors from 'cors'
//import functions from "firebase-functions" 

import testingFuction from "functions/index.js"



Vue.use(Vuex,Axios)
//Axios.defaults.basURL= 'http://localhost:2990'
const fbConfig = {
  apiKey: "AIzaSyDBfJcjpwoottzRDTYAw1QQJMvg-ZVbQaY",
  authDomain: "myfirstvueapp-2fc2e.firebaseappio.com",
  databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", 
  projectId: "myfirstvueapp-2fc2e",
}
firebase.initializeApp(fbConfig);
//const db =firebase.initializeApp(fbConfig).firestore();

const funcURL= "//us-central1-myfirstvueapp-2fc2e.cloudfunctions.net/"
//const funcURL= "https://localhost:5004/myfirstvueapp-2fc2e/us-central1/"
export default new Vuex.Store({
  state:{
      firestoreData:"",

  },
  mutations:{
  //...vuexfireMutations,
    READ_FIRESTORE:(state,data)=>{
      state.firestoreData = data;

    },

  },
  actions:{
      testingHelloWorld(state){        
         Axios.post(`${funcURL}hellohellowWorld`,1)
         .then(response=>response.data)
         .then(data=>console.log(data))        
      },
      readFireStore({commit}){       
        let object = 1;
        Axios.post(`${funcURL}withadminaddedhellow`,1) 
        .then(response=>response.data)
        .then(
          data=>{commit('READ_FIRESTORE', data)}
        )  
                 
      },
      changeDataFireStore(state,payload){   
        let userName = payload.toString();  
        Axios.post(`${funcURL}changeDataFireStore`,{name:userName}) 
        .then(response=>response.data)
        .then(data=>console.log(data))    
      },
      withadminaddedhellow(state){        
        Axios.post(`${funcURL}withadminaddedhellow`,1)
        .then(response=>response.data)
        .then(data=>console.log(data))        
     },

  },

  getters:{
    firestoreData:state=>state.firestoreData,
  },
  modules: {
  //  user,
  }
  
})
