var playerName = window.prompt("What is your robot's name?");

//variables for player stats
var playerHealth = 100 ;
var playerAttack = 10 ;
var playerMoney = 10;

//variables for enemy stats
var enemyNames = ["Robo Raf", "Kobe Droid", "AI-13-Vic"];
var enemyHealth = 50 ;
var enemyAttack = 12 ;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function
  
var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
          }
        }
    
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + ' has died!');
    
          // award player money for winning
          playerMoney = playerMoney + 20;
    
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
    
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
    
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + ' has died!');
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
      }
    };

var startGame = function(){
  //RESET player stats 
  playerHealth = 100;
  playerAttack= 10;
  playerMoney =10;

 for (var i = 0; i < enemyNames.length; i++) {
   if (playerHealth > 0) {
     //tells player which round theyre on.
     window.alert("Welcome to Robot Gladiators nerd! Round " + ( i + 1 ) );
   
   //new enemy based on index of enemyNames array
   var pickedEnemyName = enemyNames[i];

   //reset enemyHealth
   enemyHealth = 50;

   fight(pickedEnemyName)
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

  if (playerHealth > 0) {

    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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


startGame();