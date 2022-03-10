var randomNumber = function(min , max) {
  var value = Math.floor(Math.random() * (max - min +1))

  return value;
};

//fight function
var fight = function(enemy) {
  
    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money)
            break;
          }
        }
    
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
          playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );
    
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + ' has died!');
    
          // award player money for winning
          playerInfo.money = playerInfo.money + 20;
    
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }
    
        // remove players's health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
          enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );
    
        // check player's health
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + ' has died!');
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
      }
    };


var startGame = function(){
  //RESET player stats 
  playerInfo.reset();

 for (var i = 0; i < enemyInfo.length; i++) {
   if (playerInfo.health > 0) {
     //tells player which round theyre on.
     window.alert("Welcome to Robot Gladiators nerd! Round " + ( i + 1 ) );
   
   //new enemy based on index of enemyInfo array
   var pickedEnemyObj = enemyInfo[i];

   //reset enemy.health
   pickedEnemyObj.health= randomNumber(40, 60);

   fight(pickedEnemyObj)
   

   //if player is still alive AND were not at the last enemy in the array
   if (playerInfo.health > 0 && i < enemyInfo.length - 1){
     //ask if player wants to visit store before round start
     var storeConfirm = window.confirm("The fight is over, visit the store before next round?");
//if yes
   if (storeConfirm){
     shop();
   }
   }
  }
  //if player is not alive break loop
   else {
    window.alert("You lost your robot in battle nerd! Game Over!");
    break;
  }
 }
 endGame();
};

var endGame = function(){
  window.alert("The game has now ended. Let's see how you did!");

  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  }
  else{
    window.alert("Thanks for playing Robot Gladiators! Come back soon!");
  }
};


var shop = function() {
  //ask player what they'd like
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL health, UPGRADE attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  //switch statement to carry out action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      playerInfo.refillHealth();
      break;
    case "upgrade":
    case "UPGRADE":
      playerInfo.upgradeAttack();
        break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      //do nothing, so end function
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      //call shop again to force player to pick valid option.
      shop();
      break;
  }
};

/*END GAME FUNCTIONS */

/* GAME INFO / VARIABLES*/
//player info
var playerInfo = {
  name:window.prompt("What's your robot's name?"),
  health: 100,
  attack: 10,
  money: 10 ,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >=7){
      window.alert('Refilling players health by 20 for 7 dollars.');
    this.health += 20;
    this.money -= 7;
    } else {
      window.alert('you dont have enough money!!');
    }
  }, 
  upgradeAttack: function() {
    if (this.money >= 7){
      window.alert('upgrading players attack by 6 for 7 dollars.');
    this.attack += 6;
    this.money -= 7;
    } else {
      window.alert('you dont have enough money!');
    }
  }
};


//variables for enemy stats
var enemyInfo = [
  {
    name: "Mecha Raf",
    attack: randomNumber(10, 14)
  },
  {
    name: "Drobey",
    attack: randomNumber(10, 14)
  },
  {
    name:"AI-13 Vic",
    attack: randomNumber(10, 14)
  }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

/*END GAME INFO/ VARIABLES*/

/*START GAME*/
startGame();

