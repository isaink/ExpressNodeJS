const express = require("express");
const app = express();



app.get("/:play", (req, res) => {
    let obj = {};
    let keyUser = "User";
    let keyAi = "ai";
    let keyResult = "Result";
    let chance = ["Tie ", "Lose", "Win"];
    let choices = ['rock', 'paper', 'scissors'];
    chanceIndx = choices.findIndex((choices => choices == 3));
    let random = choices[Math.floor(Math.random() * choices.length)];
    // obj[key] = value;
    // let output = jsonObj.push(obj);
  if(req.params.play === random){
    obj[keyUser] = req.params.play;
    obj[keyAi] = random;
    if(obj[keyAi] === random]){ //rock
      for(let i = 0; i < choices.length; i++){
        if(obj[keyResult] < choices[i])

        // obj.keyResult = chance[3];
      }

      res.send(obj);
    }if(obj[keyAi] !== chance[2]){
      obj.keyResult = chance[2];
      res.send(obj);
    }else if(obj[keyAi] === j )

    // } else if (gameObj.ai !== "paper") {
    //   gameObj.keyResult = "userlose";
    //   res.send(gameObj);
    // } else if (gameObj.ai === "paper") {
    //   gameObj.keyResult = "usertie";
    //   res.send(gameObj);
    // }
  }
})
// app.get("/api/:id", (req, res) => { // id will be rock, scissors, etc
//   const jsonObj = [{user: req.params.id}, {ai: random}];
//   if(jsonObj[1] === jsonObj[2]){
//     // objIndex = obj.findIndex((obj => obj.id == 3));
//     let obj = {};
//     let key = "result";
//     let value = "Is a Tie";
//     obj[key] = value;
//     let output = jsonObj.push(obj);
//   // }else if(obj[2] < opt.length){
//     // result = "You lose";
//   };
//   // res.json(jsonObj)
// });

app.listen(8000, () => { // this is the port
  console.log('server listening o localhost: 8000')
});
