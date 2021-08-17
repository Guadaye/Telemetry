import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import 'firebase/firestore' 
import 'firebase/functions'
import Axios from 'axios'
//import cors from 'cors'
//import functions from "firebase-functions" 


Vue.use(Vuex,Axios)
//Axios.defaults.basURL= 'http://localhost:2990'
const fbConfig = {
  apiKey: "AIzaSyDBfJcjpwoottzRDTYAw1QQJMvg-ZVbQaY",
  authDomain: "myfirstvueapp-2fc2e.firebaseappio.com",
  databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", 
  projectId: "myfirstvueapp-2fc2e",
}
const db =firebase.initializeApp(fbConfig).firestore();

//const db =firebase.initializeApp(fbConfig).firestore();

const funcURL= "//us-central1-myfirstvueapp-2fc2e.cloudfunctions.net/"
//const funcURL= "https://localhost:5004/myfirstvueapp-2fc2e/us-central1/"
export default new Vuex.Store({
  state:{
      db,
      firestoreData:"",
      chartData:[],
      heatMapData:[],
      lineChartData:[],
  },
  mutations:{
  //...vuexfireMutations,
    READ_FIRESTORE:(state,data)=>{
      state.firestoreData = data;
    },
    GET_DATA_FOR_HEATMAP:(state,data)=>{
      state.heatMapData=[['GamesPlayed','Day','TimeFrame','GameType','GamesPlayed'],];
      console.log(data.array);
         
      for(let i = 0; i<data.array.length; i++)
      {
          for(let j = 1;j<=4; j++)
          {
              let ele = ["",data.array[i].day,j,"",data.array[i].timeFrame[j],]; 
              state.heatMapData.push(ele);       
          }

      }
      console.log(state.heatMapData);
      },

    GET_DATA_FOR_LINE_CHART:(state,data)=>{
      state.lineChartData=[['Day','GamesPlayed'],];

      for(let i = 0; i<data.array.length; i++)
      {
          let dailyGamesPlayed = 0;
          for(let j = 1;j<=4; j++)
          {
              dailyGamesPlayed += data.array[i].timeFrame[j];      
          }
          let ele = [data.array[i].day,dailyGamesPlayed];
          state.lineChartData.push(ele);
      }
      console.log("state.lineChartData "+state.lineChartData);
    },
    GET_DATA_FOR_CHART:(state,data)=>{
      state.chartData=[['Name','GamesWon'],];
      console.log(data.array);
      data.array.forEach(element=>{
        let ele = [element.name,element.gamesWon];
        state.chartData.push(ele);
        })
   
    }
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
      changeDataFireStore({commit},payload){  
        console.log(payload); 
        return db.collection("telemetryPlayer").doc(payload.uName).set({name : payload.uName,gamesWon: payload.theGamesWon});      
      },

     getDataForChart({commit}){
      Axios.post(`${funcURL}getAggregatedData`,{number:0})
      .then(response=>response.data)
     //.then(data=>console.log(data))
      .then(data=>{commit('GET_DATA_FOR_CHART', data)})
 
     },
     uploadDayGameStats({commit},payload){
       console.log(payload);
      return db.collection("telemetryGamesLog").add(payload); 

     },

     getGamesLogForHeatMap({commit},payload){
       console.log(payload);
      Axios.post(`${funcURL}getGameLog`,JSON.parse(JSON.stringify({number:payload})))
      .then(response=>response.data)
     .then(data=>{commit('GET_DATA_FOR_HEATMAP', data)})
      //.then(data=>{commit('GET_DATA_FOR_CHART', data)})
     },
     getGameLogForLineChart({commit}){
      Axios.post(`${funcURL}getGameLog`,{number:0})
      .then(response=>response.data)
     .then(data=>{commit('GET_DATA_FOR_LINE_CHART', data)})
      
     },
  },

  getters:{
    firestoreData:state=>state.firestoreData,
    chartData:state=>state.chartData,
    heatMapData:state=>state.heatMapData,
    lineChartData:state=>state.lineChartData,
  },
  modules: {
  //  user,
  }
  
})
