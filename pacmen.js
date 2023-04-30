var pos = 0;
var inicio = 0;
var inicio2 = 0;
const pacArray = ['./PacMan1.png', './PacMan2.png','./PacMan3.png', './PacMan4.png'];
var direction = 0;
var direction2 = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(5); // {x:?, y:?}
  let position = setToRandom(200);
  let direction5 = 0;
  let direction6 = 0;
  console.log(position);
  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = pacArray[Math.floor(Math.random()*4)];
  console.log(pacArray[1]);
  console.log(newimg.src);
  newimg.width = 100;
  newimg.height = 100;
  //newimg.style.left = Math.random()*500 +'px';
  newimg.style.left = position.x +'px';
  newimg.style.top = position.y +'px';



  // TODO: set position here

  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
    direction5,
    direction6
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    //item.direction3=checkCollisions(item,item.direction3);
    //item.direction4=checkCollisions2(item,item.direction4);


    item.newimg.style.left = checkCollisions(item).position.x;
    item.newimg.style.top = checkCollisions(item).position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if(item.position.x>window.innerWidth-100){
    item.velocity.x = -item.velocity.x;
  }
  else if(item.position.x<=0){
    item.velocity.x = -item.velocity.x;  
  }

    item.position.x += item.velocity.x;
  

  if(item.position.y>window.innerHeight-100){
    item.velocity.y = -item.velocity.y;
  }
  else if(item.position.y<=0){
    item.velocity.y = -item.velocity.y;  
  }

  
    item.position.y += item.velocity.y;


  return item;

  // TODO: detect collision with all walls and make pacman bounce
}
/*function checkCollisions2(item,direction2) {
  if(item.position.y>window.innerHeight-100){
    direction2=1;
    return direction2;
  }
  else if(item.position.y<0){
    direction2=0;
    return direction2;
  }
  return direction2;

  // TODO: detect collision with all walls and make pacman bounce
}*/
function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
//don't change this line
  module.exports = { checkCollisions, update, pacMen };
