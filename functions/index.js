const functions = require('firebase-functions');
var fetch = require('node-fetch')



const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database
  .ref("icx/{id}")
  .onCreate((snapshot, context) => {
    var messages = [];
    console.log("data")
    var Icxdata = snapshot.val().icx
    JSON.stringify(Icxdata)
    console.log(snapshot.val().icx)
    const root = admin.database().ref("users");
    console.log("customers : " + root.path);
    return root
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          //alert(expoToken);

          var expoToken = childSnapshot.val().expoToken;
          const isIcxEnabled = childSnapshot.val().icxservice
          console.log("Index Service :" + childSnapshot.val().icxservice)
          console.log("token : " + expoToken);
          // JSON.stringify(isIcxEnabled)
          
          if (expoToken && isIcxEnabled === "true") {
            console.log("I am first")
            const message = {
              to: expoToken,
              sound: 'default',
              title: 'Index',
              body: Icxdata,

            };
            console.log("I am Second")
            fetch('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(message),
              
            });
            console.log("Third")
          
        }
      
        });
        
        return Promise.all(messages);
      })
  });


//fcx
  exports.sendPushNotification1 = functions.database
  .ref("fcx/{id}")
  .onCreate((snapshot, context) => {
    var messages = [];
    console.log("data")
    var Fcxdata = snapshot.val().fcx
    JSON.stringify(Fcxdata)
    console.log(snapshot.val().fcx)
    const root = admin.database().ref("users");
    console.log("customers : " + root.path);
    return root
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          //alert(expoToken);

          var expoToken = childSnapshot.val().expoToken;
          var isFcxEnabled = childSnapshot.val().fcxservice
          console.log("FCX : " + isFcxEnabled)
          // console.log(childSnapshot.val().icxservice)
          console.log("token : " + expoToken);
          if (expoToken && isFcxEnabled === "true") {
            const message = {
              to: expoToken,
              sound: 'default',
              title: 'Forex',
              body: Fcxdata,

            };
          
            fetch('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(message),
            });
            
          }
        });
        return Promise.all(messages);
      })
  });


//ccx
exports.sendPushNotification2 = functions.database
  .ref("ccx/{id}")
  .onCreate((snapshot, context) => {
    var messages = [];
    console.log("data")
    var Ccxdata = snapshot.val().ccx
    JSON.stringify(Ccxdata)
    console.log(snapshot.val().ccx)
    const root = admin.database().ref("users");
    console.log("customers : " + root.path);
    return root
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          //alert(expoToken);

          var expoToken = childSnapshot.val().expoToken;
          var isCcxEnabled = childSnapshot.val().ccxservice
          // console.log(childSnapshot.val().icxservice)
          console.log("token : " + expoToken);
          if (expoToken && isCcxEnabled === "true") {
            const message = {
              to: expoToken,
              sound: 'Comex',
              title: 'Index',
              body: Ccxdata,

            };
          
            fetch('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(message),
            });
            
          }
        });
        return Promise.all(messages);
      })
  });


//ccx1
exports.sendPushNotification3 = functions.database
  .ref("ccx1/{id}")
  .onCreate((snapshot, context) => {
    var messages = [];
    console.log("data")
    var Ccx1data = snapshot.val().ccx1
    JSON.stringify(Ccx1data)
    console.log(snapshot.val().ccx1)
    const root = admin.database().ref("users");
    console.log("customers : " + root.path);
    return root
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          //alert(expoToken);

          var expoToken = childSnapshot.val().expoToken;
          var isCcx1Enabled = childSnapshot.val().ccx1service
          // console.log(childSnapshot.val().icxservice)
          console.log("token : " + expoToken);
          if (expoToken && isCcx1Enabled === "true") {
            const message = {
              to: expoToken,
              sound: 'default',
              title: 'Forex HNI',
              body: Ccx1data,

            };
          
            fetch('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(message),
            });
            
          }
        });
        return Promise.all(messages);
      })
  });


//ccx2
exports.sendPushNotification4 = functions.database
  .ref("ccx2/{id}")
  .onCreate((snapshot, context) => {
    var messages = [];
    console.log("data")
    var Ccx2data = snapshot.val().ccx2
    JSON.stringify(Ccx2data)
    console.log(snapshot.val().ccx2)
    const root = admin.database().ref("users");
    console.log("customers : " + root.path);
    return root
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          //alert(expoToken);

          var expoToken = childSnapshot.val().expoToken;
          var isCcx2Enabled = childSnapshot.val().ccx2service
          // console.log(childSnapshot.val().icxservice)
          console.log("token : " + expoToken);
          if (expoToken && isCcx2Enabled === "true") {
            const message = {
              to: expoToken,
              sound: 'default',
              title: 'Comex HNI',
              body: Ccx2data,

            };
          
            fetch('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(message),
            });
            
          }
        });
        return Promise.all(messages);
      })
  });
