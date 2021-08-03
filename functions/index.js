const functions = require("firebase-functions");
//import functions from "firebase-functions"
const admin = require('firebase-admin');
const cors  = require ('cors');
const config ={projectId:"myfirstvueapp-2fc2e", databaseURL: "https://myfirstvueapp-2fc2e.firebaseappio.com", storageBucket:"myfirstvueapp-2fc2e.appspot.com",locationId:"us-central"} ;
admin.initializeApp(config).firestore();
const Firestore = require('@google-cloud/firestore')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.hellohellowWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.insertIntoDB = functions.https.onRequest((req, res) => {
  const text = req.query.text;
  
  Firestore.collection('test').doc('test').add("111");
  //push({text: text}).then(snapshot => {
    //  res.redirect(303, snapshot.ref);
    //  res.end();
});

exports.test = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
 request = {name:"echo"};
  const text = req.query.text;
  res.send(req.name).then
  console.log(res)
}); 
});
/*
exports.convertToUppercase = functions.database.ref('/test/{pushId}/text').onWrite(event => {
  const text = event.data.val();
  const uppercaseText = text.toUpperCase();
  return event.data.ref.parent.child('uppercaseText').set(uppercaseText);
});
*/
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
exports.changeData= functions.https.onRequest((request,response)=>{

  console.log("changeData"+request);
  //request.
  response.send("1");
  end();
});
exports.getAggregateD= functions.https.onRequest((request,response)=>{
    const myId = request.params.id;
    console.log("here");
    //do work here.
    response.send({});
    end();
})