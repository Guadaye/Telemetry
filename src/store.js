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

//const funcURL= "https://us-central1-myfirstvueapp-2fc2e.cloudfunctions.net/"
const funcURL= "https://localhost:5004/myfirstvueapp-2fc2e/us-central1/"
export default new Vuex.Store({
  state:{},
  mutations:{
  //...vuexfireMutations,
  },
  actions:{
      getMeSomeSugar:(state)=>{
        const remoteAPI = firebase.functions();
        remoteAPI.https.hellohellowWorld()
        .then(data=>{ console.log("back");}
       
          )
          
      },
      fetchSugar(state){
        testingFuction.exports.insertIntoDB;
         //Axios.post(`${funcURL}hellohellowWorld`,1) 
        
      },
      insertData(state){
        //cors(request, response, () => {
        let object = 1;
        Axios.post(`${funcURL}insertIntoDB`,object)   //}) 
        
      },
      changeData(state){
        console.log("cd");
        Axios.post(`${funcURL}changeData`)    
      },
      connect({commit}){
        console.log("send data to server from store");
          Axios.post('http://localhost:2990/api/player/connect', this.state.currentGameIndex)
          .then(response =>response.data)
          .then(data => {commit('USER_CONNECTED', data)})
          .catch(error=>console.log(error))
      },


  },
  modules: {
  //  user,
  }
  
})
