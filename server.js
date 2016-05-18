var nba = require("nba")
var request = require("request")
var express = require("express")
var bodyParser = require("body-parser")
const MongoClient = require('mongodb').MongoClient

var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var playersObj = {};
var teamObj = {};

initialize()


app.use(express.static(__dirname + "/Client"))


app.get('/', function (req,res) {
  console.log(__dirname)
});

app.get('/api/byTeam', function(req, res){
  res.send(teamObj)
});

app.get('/api/byConf', function(req, res){
  res.send(teamObj)
});

app.post('/api/byPlayer', function(req, res){
  if(playersObj[req.body.playerName]){
    nba.stats.playerInfo({playerId: playersObj[req.body.playerName].playerId}, function(err, data, param){
      
      res.send(data)
    })
  }else{
    res.send("Player not found")
  }
});

function initialize(){
  for(var i = 0; i < nba.players.length; i++){
    playersObj[(nba.players[i]["firstName"] + " " + nba.players[i]["lastName"]).toUpperCase()] = nba.players[i]
  }

  nba.stats.teamStats({}, function(err,data){
    for(var i = 0; i < data.length; i++){
      teamObj[data[i].teamName] = data[i]
    }
  })
}

MongoClient.connect('mongodb://admin:admin@ds023932.mlab.com:23932/nbadb', function(err, database){
  
  if (err){
    return console.log(err)
  }
  console.log("database initialized") 
  db = database;

  app.listen(3000,function(){
    console.log(db.collections('players'))
    console.log('listening on 3000')
  })
  
})


var dataMethods = {
  getPlayerData : function(db){
    db.players.insert(nba.players)
    console.log("player data fetched")
  }
} 

var querydb = function(db){
  console.log(db)
}