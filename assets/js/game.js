var playerName = window.prompt("What is your robot's name?");

//variables for player stats
var playerHealth = 100 ;
var playerAttack = 10 ;
var playerMoney = 10;

//console.log multiple values this way
//console.log(playerName, playerAttack, playerHealth, playerMoney);

//variables for enemy stats
var enemyNames = ["Robo Raf", "Kobe Droid", "AI-13-Vic"];
//console.log(enemyNames);
var enemyHealth = 50 ;
var enemyAttack = 12 ;

//fight function
var fight = function(enemyName) {
    //tells player round is starting
 window.alert("Welcome to Robot Gladiators Nerd!");

//prompt player to pick fight or skip
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'fight' or 'skip' to choose.");
// check to see the prompt response
console.log (promptFight);

//if player chooses fight then fight 
if (promptFight ==="FIGHT" || promptFight === "fight") {

///subtract playerAttack value to enemyHealth value and use result to update enemyHealth value
enemyHealth = enemyHealth - playerAttack;

//log new result to confirm it worked
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining.");

    // check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

//subtract enemyAttack value to playerHealth value and use result to update new playerHealth value
playerHealth = playerHealth - enemyAttack ;

//log result to confirm
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + "health remaining.")

    //check players health if its 0, player dies if not they keep fighting.
    if (playerHealth <=0){
        window.alert(playerName + "has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

//if player chooses skip 
} else if (promptFight === "SKIP" || promptFight === "skip") {
    var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
    //if yes (true). skip fight.
    if (confirmSkip){
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    //subtract money for skipping
    playerMoney = playerMoney - 2;
    }
    //if no (false).  ask again by running fight() again
    else{
        fight();
    }

} else{
    window.alert("You need to choose a valid option. Try again.");
}
};
//fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }