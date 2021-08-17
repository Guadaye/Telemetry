const functions = require("firebase-functions");
const config ={projectId:"myfirstvueapp-2fc2e", databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", storageBucket:"myfirstvueapp-2fc2e.appspot.com",locationId:"us-central"} ;
const {Firestore} = require('@google-cloud/firestore')
const cors = require('cors')({ origin: true })
const admin = require('firebase-admin');
//const { ownKeys } = require("core-js/fn/reflect");

admin.initializeApp(config);      
let db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

function EnableCORSRespons(req, res){
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST,OPTIONS');

        if (req.method === 'OPTIONS') {     
            // Send response to OPTIONS requests
            res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
            res.set('Access-Control-Allow-Headers',  'Origin,Content-Type');
            res.set('Access-Control-Max-Age', '3600');
            res.set('Access-Control-Preflight-Continue', true);
          } 
}

exports.hellohellowWorld = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        functions.logger.info("Hello logs!", {structuredData: true});
        res.send("Hello from Firebase!");
        end();    
    })
});

exports.withadminaddedhellow = functions.https.onRequest((req, res) => {
  
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST,OPTIONS');
    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
      res.set('Access-Control-Allow-Headers',  'Origin,Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.set('Access-Control-Preflight-Continue', true);
      
    }
    return db.collection("telemetryTesting").doc("name").get()
        .then(doc=>{
            const data = doc.data();
            return res.send(data);           
        })

});


exports.readFirestore = functions.https.onRequest((req, res) => {
    //EnableCORSRespons(req,res);  
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST,OPTIONS');
    if (req.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        res.set('Access-Control-Allow-Headers',  'Origin,Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.set('Access-Control-Preflight-Continue', true);
    }

        return db.collection("telemetryTesting").doc("name").get()
        .then(doc=>{
            const data = doc.data();
            return res.send(data);
        }); 
});


exports.getAggregatedData = functions.https.onRequest((req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST,OPTIONS');
    try{
        if (req.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        res.set('Access-Control-Allow-Headers',  'Origin,Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.set('Access-Control-Preflight-Continue', true);
        }  

        const whywhy = req.body;
        let ahhh = whywhy.number;
        let actionCount = 0;
        let playerArray = [];
        let dbRef= db.collection("telemetryPlayer");
        let query = dbRef.where('gamesWon','>',ahhh).get();
        query.then(result=>{        
            result.forEach(
                doc=>{
                    let rec = doc.data();
                    console.log(rec);
                    actionCount=actionCount+1;
                    playerArray.push(rec)
                })

                res.send(JSON.stringify({count:actionCount,array:playerArray}));
        });        
    }catch(e){
        let  info={msg:e.message,stack:e.stack};
        res.send(JSON.stringify(info))
    }      
})


    exports.getGameLog = functions.https.onRequest((req,res)=>{
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET, POST,OPTIONS');
        try{
            if (req.method === 'OPTIONS') {
            // Send response to OPTIONS requests
            res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
            res.set('Access-Control-Allow-Headers',  'Origin,Content-Type');
            res.set('Access-Control-Max-Age', '3600');
            res.set('Access-Control-Preflight-Continue', true);
            }  

            const bodyData = req.body;
            let day = bodyData.number;
            let actionCount = 0;
            let playerArray = [];
            let dbRef= db.collection("telemetryGamesLog");
            let query = dbRef.where('day','>',day).get();
            query.then(result=>{           
                result.forEach(
                    doc=>{
                        let rec = doc.data();
                        console.log(rec);
                        actionCount=actionCount+1;
                        playerArray.push(rec)
                    })
        
                    res.send(JSON.stringify({count:actionCount,array:playerArray}));
            });            
        }catch(e){
            let  info={msg:e.message,stack:e.stack};
            res.send(JSON.stringify(info))
        }      
    
    })

    exports.getGameLogForLineChart = functions.https.onRequest((req,res)=>{
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET, POST,OPTIONS');
        try{
            if (req.method === 'OPTIONS') {
            // Send response to OPTIONS requests
            res.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
            res.set('Access-Control-Allow-Headers',  'Origin,Content-Type');
            res.set('Access-Control-Max-Age', '3600');
            res.set('Access-Control-Preflight-Continue', true);
            }  

           // const bodyData = req.body;
           // let day = bodyData.number;
            let actionCount = 0;
            let playerArray = [];
            let dbRef= db.collection("telemetryGamesLog");
            let query = dbRef.where('day','>',0).get();
            query.then(result=>{           
                result.forEach(
                    doc=>{
                        let rec = doc.data();
                        let gamePerDay=0;
                        
                      //  rec.timeFrame.forEach(element=>{
                      //      gamePerDay+=element;
                      //  })
                        playerArray.push({day:rec.day,gamesPlayed:gamePerDay});
                        actionCount++;
                    })
        
                    res.send(JSON.stringify({count:actionCount,array:playerArray}));
            });            
        }catch(e){
            let  info={msg:e.message,stack:e.stack};
            res.send(JSON.stringify(info))
        }      
    
    })
