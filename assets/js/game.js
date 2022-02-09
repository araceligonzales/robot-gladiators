var playerName = window.prompt("What is your robot's name?");
console.log(playerName)

//variables for player stats
var playerHealth = 100 ;
var playerAttack = 10 ;

//variables for enemy stats
var enemyName = "Rafael the Robot";
var enemyHealth = 50 ;
var enemyAttack = 12 ;

var fight = function() {
    //tells player round is starting
 window.alert("Welcome to Robot Gladiators Nerd!");
};
fight();

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

    //check players health
    if (playerHealth <=0){
        window.alert(playerName + "has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
