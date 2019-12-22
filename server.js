const express = require('express');
const app = express();

const path = require('path');
const port = process.env.PORT || 3270;

var NodeWebcam = require( "node-webcam" );


var cameraOpts = {

   //Picture related

   width: 1280,

   height: 720,

   quality: 100,


   //Delay in seconds to take shot
   //if the platform supports miliseconds
   //use a float (0.1)
   //Currently only on windows

   delay: 0,


   //Save shots in memory

   saveShots: true,


   // [jpeg, png] support varies
   // Webcam.OutputTypes

   output: "jpeg",


   //Which camera to use
   //Use Webcam.list() for results
   //false for default device

   device: false,


   // [location, buffer, base64]
   // Webcam.CallbackReturnTypes

   callbackReturn: "location",


   //Logging

   verbose: false

};


//Creates webcam instance

var Webcam = NodeWebcam.create( cameraOpts );


//Will automatically append location output type

Webcam.capture( "test_picture", function( err, data ) {
  
} );


app.use(express.static(__dirname + '/'));                 // set the static files location /public/img will be /img for users

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
