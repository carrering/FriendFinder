var friendsData = require("../data/friends.js")


module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendsData)
    })


    app.post("/api/friends", function(req,res){
        
        var surveyScore = req.body.scores
        var arrayTotalScore = []
        var totalScore = 0

        for(i=0;i<friendsData.length;i++){
            for(j=0;j<10;j++){
                totalScore += Math.abs(friendsData[i].scores[j] - surveyScore[j])
                console.log("friend "+ friendsData[i].friendName + " total score: " + totalScore)
            }
            arrayTotalScore.push(totalScore)
            totalScore = 0
        }
        console.log(arrayTotalScore)
        var indexOfMatch = indexOfSmallest(arrayTotalScore)
        console.log(friendsData[indexOfMatch].photo)
        console.log(friendsData[indexOfMatch].friendName)
        res.json(friendsData[indexOfMatch])
        friendsData.push(req.body)
        
    })
}

function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
     if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
   }