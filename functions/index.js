const functions = require('firebase-functions');

//const pathToFfmpeg = require('ffmpeg-static');



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    //response.send(pathToFfmpeg);
    response.send("Hello from Firebase!");
});
