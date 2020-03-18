let moves = ['rock', 'paper', 'scissors']
let moveIndex = 0
let wins = 0
let losses = 0
let ties = 0

let images = {
  rock: "https://www.readersdigest.ca/wp-content/uploads/sites/14/2018/10/01_Balanced_Naturally-Gorgeous-Rock-Formations-Around-the-World_313408829_NaughtyNut-760x506.jpg"
  ,
  paper: "https://www.indexbraille.com/getmedia/205d81da-37a4-46c8-a669-9508730412c4/paper_fan-folded_16x9.jpg?width=960"
  ,
  scissors: "https://cdn.pixabay.com/photo/2016/03/31/23/11/scissors-1297454_1280.png"
  ,
  win: "http://pixelartmaker.com/art/0d111fb05fe3517.png"
  ,
  lose: "http://thebenefitsourcellc.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-20-at-4.17.38-PM.png"
  ,
  tieGame: "https://sd.keepcalms.com/i-w600/keep-calm-it-s-a-tie-game.jpg"
  ,
  preGame: "https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2017/05/29/rock_paper_scissors__2x.png?itok=MW68w59E"

}

function play(pMove) {
  randomMove()
  let cMove = moves[moveIndex]
  if (pMove == 'rock') {
    let leftImgElem = document.getElementById("left-img")

    leftImgElem.src = images.rock
    switch (cMove) {
      case 'rock':
        tie()
        break
      case 'paper':
        cWins()
        break
      case 'scissors':
        pWins()
        break
    }
  }
  else if (pMove == 'paper') {
    let leftImgElem = document.getElementById("left-img")

    leftImgElem.src = images.paper
    switch (cMove) {
      case 'rock':
        pWins()
        break
      case 'paper':
        tie()
        break
      case 'scissors':
        cWins()
        break
    }
  }
  else if (pMove == 'scissors') {
    let leftImgElem = document.getElementById("left-img")

    leftImgElem.src = images.scissors
    switch (cMove) {
      case 'rock':
        cWins()
        break
      case 'paper':
        pWins()
        break
      case 'scissors':
        tie()
        break
    }
  }

}

function randomMove() {
  moveIndex = Math.floor(Math.random() * moves.length)
  console.log(moveIndex)
  if(moveIndex == 0){
    console.log("if 1")
    let rightImgElem = document.getElementById("right-img")
    rightImgElem.src = images.rock
  }else if(moveIndex == 1){
    console.log("if 2")
    let rightImgElem = document.getElementById("right-img")
    rightImgElem.src = images.paper
  }else if(moveIndex == 2){
    console.log("if 3")
    let rightImgElem = document.getElementById("right-img")
    rightImgElem.src = images.scissors
  }
}

function cWins() {
  losses++
  let middleImgElem = document.getElementById("middle-img")
  let lossesElem = document.getElementById("losses")
  middleImgElem.src = images.lose
}

function pWins() {
  wins++
  let middleImgElem = document.getElementById("middle-img")
  let winsElem = document.getElementById("wins")
  middleImgElem.src = images.win
}

function tie() {
  ties++
  let middleImgElem = document.getElementById("middle-img")
  let tiesElem = document.getElementById("losses")
  tiesElem.innerText = "Ties: " + ties
  middleImgElem.src = images.tieGame
}

