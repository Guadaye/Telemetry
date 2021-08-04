const functions = require("firebase-functions");
//const admin = require('firebase-admin');
const config ={projectId:"myfirstvueapp-2fc2e", databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", storageBucket:"myfirstvueapp-2fc2e.appspot.com",locationId:"us-central"} ;
const {Firestore} = require('@google-cloud/firestore')
const cors = require('cors')({ origin: true })

//admin.initializeApp(config).firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.hellohellowWorld = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        functions.logger.info("Hello logs!", {structuredData: true});
        res.send("Hello from Firebase!");
        end();    
    })
});

exports.withadminaddedhellow = functions.https.onRequest((req, res) => {
  
    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'GET');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
    }
        const admin = require('firebase-admin');
        const config ={projectId:"myfirstvueapp-2fc2e", databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", storageBucket:"myfirstvueapp-2fc2e.appspot.com",locationId:"us-central"} ;
        admin.initializeApp(config);       
        let db = admin.firestore();

        functions.logger.info("Hello logs!", {structuredData: true});
        res.send("Hello from Firebase!");
        end();    

});

exports.changeDataFireStore = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        const admin = require('firebase-admin');
        const config ={projectId:"myfirstvueapp-2fc2e", databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", storageBucket:"myfirstvueapp-2fc2e.appspot.com",locationId:"us-central"} ;
        admin.initializeApp(config);       
        let db = admin.firestore();

        const text = req.query.text;
        db.collection("telemetryTesting").doc("name").set(text);
        //.then(result=>{
        //    let doc = admin.firestore().collection("telemetryTesting").doc("name");
        //    res.send(doc);
        //})
        res.end();
    })
});

exports.readFirestore = functions.https.onRequest((req, res) => {
    cors(req, res, () => {


        res.set('Access-Control-Allow-Origin', '*');

        if (req.method === 'OPTIONS') {
          // Send response to OPTIONS requests
          res.set('Access-Control-Allow-Methods', 'GET');
          res.set('Access-Control-Allow-Headers', 'Content-Type');
          res.set('Access-Control-Max-Age', '3600');
        }

        const admin = require('firebase-admin');
        const config ={projectId:"myfirstvueapp-2fc2e", databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", storageBucket:"myfirstvueapp-2fc2e.appspot.com",locationId:"us-central"} ;

        admin.initializeApp(config);
        
        let db = admin.firestore();
        return db.collection("telemetryTesting").doc("name").get()
        .then(doc=>{
            const data = doc.data();
            return res.send(data);
        })

    }); 
});
/*
exports.convertToUppercase = functions.database.ref('/test/{pushId}/text').onWrite(event => {
  const text = event.data.val();
  const uppercaseText = text.toUpperCase();
  return event.data.ref.parent.child('uppercaseText').set(uppercaseText);
});

//export const aggregate = functions.https.onCall(...)
exports.aggregate = functions.https.onCall((snapshot,context)=>{
    const data = snapshot.data();
    const docId = context.params.documentId;

    // your code
    return {id: docId,payload:data}
});


// dont use it if something will be updated
//exports.onTheFly = functions.firebaseConfig
//                            .document('collection/record')
 //                           .onCreate((user,context)=>{
//pull id from the context...
//})

exports.getAggregateD= functions.https.onRequest((request,response)=>{
    const myId = request.params.id;
    console.log("here");
    //do work here.
    response.send({});
    end();
})

*/