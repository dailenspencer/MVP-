var nba = require("nba")
var request = require("request")
var express = require("express")
var bodyParser = require("body-parser")
var app = express()

// nba.stats.playerInfo({playerId: 1626242}, function(res, error){
//   console.log(error)
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var playersObj = {};
for(var i = 0; i < nba.players.length; i++){
  playersObj[nba.players[i]["firstName"] + " " + nba.players[i]["lastName"]] = nba.players[i]
}

console.log(playersObj)

app.use(express.static(__dirname + "/Client"))


app.get('/', function (req, res) {
  console.log(__dirname)
});
app.post('/api/byPlayer', function(req,res){
  console.log(req.body)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
