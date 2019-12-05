const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const port = 8080;
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));  //tell the app to use it
app.use(express.static("public"));

app.listen(port, function(){
  console.log("The server is running on the port " + port);
});

var dico = ["cristiano ronaldo", "lionel messi", "mo salah", "neymar jr", "kaka", "mesult ozil", "ronaldo", "ronaldinho", "raheem sterling", "sadio mane"];

var names = [];

app.get("/", function(req, res){
  for(var i = 0; i < names.length; i++){
    names[i] = "";
  }
  res.render("indexTest", {dico: dico, names: names});
});

app.post("/", function(req, res){

  const ans = req.body.reponse.toLowerCase();
  const btn = req.body.button;
  var isCorrect = false;

  if(ans === dico[btn]){
    isCorrect = true;
    names[btn] = dico[btn];
    res.render("indexTest", {dico: dico, names: names});

  }else{
    names[btn] = "Wrong answer";
    res.render("indexTest", {dico: dico, names: names});
  }

});
