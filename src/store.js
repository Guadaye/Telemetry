import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import 'firebase/firestore' 
import 'firebase/functions'
import Axios from 'axios'
//import cors from 'cors'
//import functions from "firebase-functions" 

import testingFuction from "functions/index.js"



const cors = require('cors')({ origin: true })
Vue.use(Vuex,Axios)
Axios.defaults.basURL= 'http://localhost:2990'
const fbConfig = {
  apiKey: "AIzaSyDBfJcjpwoottzRDTYAw1QQJMvg-ZVbQaY",
  authDomain: "myfirstvueapp-2fc2e.firebaseappio.com",
  databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", 
  projectId: "myfirstvueapp-2fc2e",
}
firebase.initializeApp(fbConfig);
//const db =firebase.initializeApp(fbConfig).firestore();

const funcURL= "https://us-central1-myfirstvueapp-2fc2e.cloudfunctions.net/"
//const funcURL= "https://localhost:5004/myfirstvueapp-2fc2e/us-central1/"
export default new Vuex.Store({
  state:{},
  mutations:{
  //...vuexfireMutations,
  },
  actions:{
      testingHelloWorld(state){        
         Axios.post(`${funcURL}hellohellowWorld`,1)
         .then(response=>response.data)
         .then(data=>console.log(data))        
      },
      readFireStore(state){       
        let object = 1;
        Axios.post(`${funcURL}readFireStore`,object)          
      },
      changeDataFireStore(state){     
        Axios.post(`${funcURL}changeDataFireStore`,{name:"echo"})    
      },
      withadminaddedhellow(state){        
        Axios.post(`${funcURL}withadminaddedhellow`,1)
        .then(response=>response.data)
        .then(data=>console.log(data))        
     },

  },
  modules: {
  //  user,
  }
  
})
