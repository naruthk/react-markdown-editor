var Rebase = require('re-base');
var firebase = require('firebase');
var app = firebase.initializeApp({
  apiKey: "AIzaSyB585tXA9pFLIRv_0epAVn3IfajVkDbiNs",
  authDomain: "website-naruthk.firebaseapp.com",
  databaseURL: "https://website-naruthk.firebaseio.com"
});
var base = Rebase.createClass(app.database());

export default base;


