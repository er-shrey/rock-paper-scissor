var k, p1,  p2;
var p1Wins = 0;
var p2Wins = 0;
var p1Chance = 0;
var p2Chance = 0;
//k = 4, p1 = "SR", p2 = "R";
//k = 3, p1 = "S", p2 = "SSS";
k = 10, p1 = "RPSRPSRPS", p2 = "PSRPSRSPRSPR";


for(let i=0; i<k; i++){
  if(p1Chance == p1.length){
    p1Chance = 0;
  }
  if(p2Chance == p2.length){
    p2Chance = 0;
  }
  console.log("P1 ", p1[p1Chance]);
  console.log("P2 ", p2[p2Chance]);
  if(p1[p1Chance]=="R" && p2[p2Chance]=="S"){
    p1Wins += 1;
    console.log("P1 Wins");
  }
  else if(p1[p1Chance]=="P" && p2[p2Chance]=="R"){
    p1Wins += 1;
    console.log("P1 Wins");
  }
  else if(p1[p1Chance]=="S" && p2[p2Chance]=="P"){
    p1Wins += 1;
    console.log("P1 Wins");
  }
  else if(p1[p1Chance]==p2[p2Chance]){
    console.log("Match draw");
  }
  else{
    p2Wins += 1;
    console.log("P2 Wins");
  }
  console.log("---------------");
  p2Chance += 1;
  p1Chance += 1;
}

console.log("p1: ",p1Wins);
console.log("p2: ",p2Wins);
