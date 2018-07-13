// Health of all the cards of heroes and enemies.
var cloudhealth=650;
var lelouchhealth=700;
var yagamihealth=750;
var yugihealth=850;

// Attack power of the hero and enemy.
var baselineattackpower=10; //The hero you picked's attack power (which will increase as the game goes on)
var cloudenemyattack=30;
var lelouchenemyattack=35;
var yagamienemyattack=40;
var yugienemyattack=45;

// Booleans to trigger code when you pick a hero. To make sure the attack only correlates to one hero and enemy pair.
var cloudherohealth=false;
var lelouchherohealth=false;
var yagamiherohealth=false;
var yugiherohealth=false;

// Booleans to trigger code when you pick an enemy.To make sure the attack only correlates to one hero and enemy pair.
var cloudenemyhealth=false;
var lelouchenemyhealth=false;
var yagamienemyhealth=false;
var yugienemyhealth=false;

// Booleans to trigger win condition.
var cloudenemywin=false;
var lelouchenemywin=false;
var yagamienemywin=false;
var yugienemywin=false;

$(document).ready(function() {
  
    // Hides the enemy cards and restart button till they are called upon based on certain conditions.
    $(".hiddencontent").hide();
    $(".hiddenrestart").hide();

    // Displays the health of the hero and enemy cards in the card box.
    $(".displaycloudhealth").text(cloudhealth);
    $(".displaylelouchhealth").text(lelouchhealth);
    $(".displayyagamihealth").text(yagamihealth);
    $(".displayyugihealth").text(yugihealth);
    
    // Buttons to click which hero you are picking and also formats the look of the game.
    $(".cloudherobtn").on("click", function() {
        $(".charactertop").text("Your Hero!");
        $("#enemytitle").text("Now Pick Your Rival!");
        $(".lelouchherocard, .yagamiherocard, .yugiherocard").hide();
        $(".enemyholdera").append($(".lelouchenemycard"));
        $(".enemyholderb").append($(".yagamienemycard"));
        $(".enemyholderc").append($(".yugienemycard"));
        $(this).hide();
        cloudherohealth=true;
    });

    $(".lelouchherobtn").on("click", function() {
        $(".leftappend").append($(".lelouchherocard"));
        $(".charactertop").text("Your Hero!");
        $("#enemytitle").text("Now Pick Your Rival!");
        $(".cloudherocard, .yagamiherocard, .yugiherocard").hide();
        $(".enemyholdera").append($(".cloudenemycard"));
        $(".enemyholderb").append($(".yagamienemycard"));
        $(".enemyholderc").append($(".yugienemycard"));
        $(this).hide();
        lelouchherohealth=true;
    });

    $(".yagamiherobtn").on("click", function() {
        $(".leftappend").append($(".yagamiherocard"));
        $(".charactertop").text("Your Hero!");
        $("#enemytitle").text("Now Pick Your Rival!");
        $(".lelouchherocard, .cloudherocard, .yugiherocard").hide();
        $(".enemyholdera").append($(".cloudenemycard"));
        $(".enemyholderb").append($(".lelouchenemycard"));
        $(".enemyholderc").append($(".yugienemycard"));
        $(this).hide();
        yagamiherohealth=true;
    });

    $(".yugiherobtn").on("click", function() {
        $(".leftappend").append($(".yugiherocard"));
        $(".charactertop").text("Your Hero!");
        $("#enemytitle").text("Now Pick Your Rival!");
        $(".lelouchherocard, .yagamiherocard, .cloudherocard").hide();
        $(".enemyholdera").append($(".cloudenemycard"));
        $(".enemyholderb").append($(".lelouchenemycard"));
        $(".enemyholderc").append($(".yagamienemycard"));
        $(this).hide();
        yugiherohealth=true;
    });

    // Buttons to pick the enemy cards to match with a hero.
    $(".cloudenemybtn").on("click", function () {
        $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").hide();
        $(".mainenemyholder").append($(".cloudenemycard"));
        cloudenemyhealth=true;
    });

    $(".lelouchenemybtn").on("click", function () {
        $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").hide();
        $(".mainenemyholder").append($(".lelouchenemycard"));
        lelouchenemyhealth=true;
    });

    $(".yagamienemybtn").on("click", function () {
        $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").hide();
        $(".mainenemyholder").append($(".yagamienemycard"));
        yagamienemyhealth=true;
    });

    $(".yugienemybtn").on("click", function () {
        $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").hide();
        $(".mainenemyholder").append($(".yugienemycard"));
        yugienemyhealth=true;
    });

    //Function for when the enemy dies which resets the picking of enemies.
    function emptyEverything () {
        $(".mainenemyholder").empty();
        $("#herofight").empty();
        $("#enemyfight").empty();
        $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
    }

    // Functions for when the hero dies.
    function HeroDead () {
        $(".hiddenrestart").show();
        $(".battlestats").html("<h2>"+"You are not the protagonist of this anime!"+"</h2>").addClass("text-danger").css("font-size","2rem");
        $("#enemyDefeat").text("You Have Been Defeated Side Character!")
    }

    // Function for when you "tie" the game.
    function tieGame () {
        $(".hiddenrestart").show();
        $(".battlestats").html("<h2>"+"Your Sacrifice was in Vain!"+"</h2>").addClass("text-danger").css("font-size","2rem");
        $("#enemyDefeat").text("You Still Lose!");
    }

    //Attack Button
    $(".attack").on("click", function() {

        // Code Base if Cloud Strife is the Hero
        if (cloudherohealth && lelouchenemyhealth) {
            baselineattackpower+=20;
            $("#herofight").text("Attacked Lelouch For "+baselineattackpower);
            $("#enemyfight").text("Lelouch Attacked For " +lelouchenemyattack);
            cloudhealth-=lelouchenemyattack;
            lelouchhealth-=baselineattackpower;
            $(".displaycloudhealth").text(cloudhealth);
            $(".displaylelouchhealth").text(lelouchhealth);
            if (cloudhealth<=0 && lelouchhealth<=0) {
                cloudherohealth=false;
                tieGame();
            }
            else if (cloudhealth<=0) {
                cloudherohealth=false;
                HeroDead();
            }
            else if (lelouchhealth<=0) {
                lelouchenemyhealth=false;
                lelouchenemywin=true;
                emptyEverything();
            }
        }

        else if (cloudherohealth && yagamienemyhealth) {
            baselineattackpower+=15;
            $("#herofight").text("Attacked Light Yagami For "+baselineattackpower);
            $("#enemyfight").text("Light Yagami Attacked For " +yagamienemyattack);
            cloudhealth-=yagamienemyattack
            yagamihealth-=baselineattackpower;
            $(".displaycloudhealth").text(cloudhealth);
            $(".displayyagamihealth").text(yagamihealth);
            if (cloudhealth <=0 && yagamihealth<=0) {
                cloudherohealth=false;
                tieGame();
            }
            else if (cloudhealth<=0) {
                cloudherohealth=false;
                HeroDead();
            }
            else if (yagamihealth<=0) {
                yagamienemyhealth=false;
                yagamienemywin=true;
                emptyEverything();
            }
        }

        else if (cloudherohealth && yugienemyhealth) {
            baselineattackpower+=11;
            $("#herofight").text("Attacked Yugi Moto For "+baselineattackpower);
            $("#enemyfight").text("Yugi Moto Attacked For " +yugienemyattack);
            cloudhealth-=yugienemyattack;
            yugihealth-=baselineattackpower;
            $(".displaycloudhealth").text(cloudhealth);
            $(".displayyugihealth").text(yugihealth);
            if (cloudhealth <=0 && yugihealth<=0) {
                cloudherohealth=false;
                tieGame();
            }
            else if (cloudhealth<=0) {
                cloudherohealth=false;
                HeroDead();
            }
            else if (yugihealth<=0) {
                yugienemyhealth=false;
                yugienemywin=true;
                emptyEverything();
            }
        }

        //Code Base if Lelouch is the Hero
        if (lelouchherohealth && cloudenemyhealth) {
            baselineattackpower+=12;
            $("#herofight").text("Attacked Cloud Strife For "+baselineattackpower);
            $("#enemyfight").text("Cloud Strife Attacked For " +cloudenemyattack);
            lelouchhealth-=cloudenemyattack;
            cloudhealth-=baselineattackpower;
            $(".displaylelouchhealth").text(lelouchhealth);
            $(".displaycloudhealth").text(cloudhealth);
            if (lelouchhealth<=0 && cloudhealth<=0) {
                lelouchherohealth=false;
                tieGame();
            }
            else if (lelouchhealth<=0) {
                lelouchherohealth=false;
                HeroDead();
            }
            else if (cloudhealth<=0) {
                cloudenemyhealth=false;
                cloudenemywin=true;
                emptyEverything();
            }
        }

        else if (lelouchherohealth && yagamienemyhealth) {
            baselineattackpower+=12;
            $("#herofight").text("Attacked Light Yagami For "+baselineattackpower);
            $("#enemyfight").text("Light Yagami Attacked For " +yagamienemyattack);
            lelouchhealth-=yagamienemyattack;
            yagamihealth-=baselineattackpower;
            $(".displaylelouchhealth").text(lelouchhealth);
            $(".displayyagamihealth").text(yagamihealth);
            if (lelouchhealth<=0 && yagamihealth<=0) {
                lelouchherohealth=false;
                tieGame();
            }
            else if (lelouchhealth<=0) {
                lelouchherohealth=false;
                HeroDead();
            }
            else if (yagamihealth<=0) {
                yagamienemyhealth=false;
                yagamienemywin=true;
                emptyEverything();
            }
        }

        else if (lelouchherohealth && yugienemyhealth) {
            baselineattackpower+=11;
            $("#herofight").text("Attacked Yugi Moto For "+baselineattackpower);
            $("#enemyfight").text("Yugi Moto Attacked For " +yugienemyattack);
            lelouchhealth-=yugienemyattack;
            yugihealth-=baselineattackpower;
            $(".displaylelouchhealth").text(lelouchhealth);
            $(".displayyugihealth").text(yugihealth);
            if (lelouchhealth<=0 && yugihealth<=0) {
                lelouchherohealth=false;
                tieGame();
            }
            else if (lelouchhealth<=0) {
                lelouchherohealth=false;
                HeroDead();
            }
            else if (yugihealth<=0) {
                yugienemyhealth=false;
                yugienemywin=true;
                emptyEverything();
            }
        }

        //Code base if Light Yagami is picked as the hero.
        if (yagamiherohealth && cloudenemyhealth) {
            baselineattackpower+=14;
            $("#herofight").text("Attacked Cloud Strife For "+baselineattackpower);
            $("#enemyfight").text("Cloud Strife Attacked For " +cloudenemyattack);
            yagamihealth-=cloudenemyattack;
            cloudhealth-=baselineattackpower;
            $(".displayyagamihealth").text(yagamihealth);
            $(".displaycloudhealth").text(cloudhealth);
            if (yagamihealth<=0 && cloudhealth<=0) {
                yagamiherohealth=false;
                tieGame();
            }
            else if (yagamihealth<=0) {
                yagamiherohealth=false;
                HeroDead();
            }
            else if (cloudhealth<=0) {
                cloudenemyhealth=false;
                cloudenemywin=true;
                emptyEverything();
            }
        }

        else if (yagamiherohealth && lelouchenemyhealth) {
            baselineattackpower+=9;
            $("#herofight").text("Attacked Lelouch For "+baselineattackpower);
            $("#enemyfight").text("Lelouch Attacked For " +lelouchenemyattack);
            yagamihealth-=lelouchenemyattack;
            lelouchhealth-=baselineattackpower;
            $(".displayyagamihealth").text(yagamihealth);
            $(".displaylelouchhealth").text(lelouchhealth);
            if (yagamihealth<=0 && lelouchhealth<=0) {
                yagamiherohealth=false;
                tieGame();
            }
            else if (yagamihealth<=0) {
                yagamiherohealth=false;
                HeroDead();
            }
            else if (lelouchhealth<=0) {
                lelouchenemyhealth=false;
                lelouchenemywin=true;
                emptyEverything();
            }
        }

        else if (yagamiherohealth && yugienemyhealth) {
            baselineattackpower+=10;
            $("#herofight").text("Attacked Yugi Moto For "+baselineattackpower);
            $("#enemyfight").text("Yugi Moto Attacked For " +yugienemyattack);
            yagamihealth-=yugienemyattack;
            yugihealth-=baselineattackpower;
            $(".displayyagamihealth").text(yagamihealth);
            $(".displayyugihealth").text(yugihealth);
            if (yagamihealth<=0 && yugihealth) {
                yagamiherohealth=false;
                tieGame();
            }
            else if (yagamihealth<=0) {
                yagamiherohealth=false;
                HeroDead();
            }
            else if (yugihealth<=0) {
                yugienemyhealth=false;
                yugienemywin=true;
                emptyEverything();
            }
        }

        //Code Base for when Yugi Moto is picked as the hero.

        if (yugiherohealth && cloudenemyhealth) {
            baselineattackpower+=9;
            $("#herofight").text("Attacked Cloud Strife For "+baselineattackpower);
            $("#enemyfight").text("Cloud Strife Attacked For " +cloudenemyattack);
            yugihealth-=cloudenemyattack;
            cloudhealth-=baselineattackpower;
            $(".displayyugihealth").text(yugihealth);
            $(".displaycloudhealth").text(cloudhealth);
            if (yugihealth<=0 && cloudhealth<=0) {
                yugiherohealth=false;
                tieGame();
            }
            else if (yugihealth<=0) {
                yugiherohealth=false;
                HeroDead();
            }
            else if (cloudhealth<=0) {
                cloudenemyhealth=false;
                cloudenemywin=true;
                emptyEverything();
            }
        }

        else if (yugiherohealth && lelouchenemyhealth) {
            baselineattackpower+=7;
            $("#herofight").text("Attacked Lelouch For "+baselineattackpower);
            $("#enemyfight").text("Lelouch Attacked For " +lelouchenemyattack);
            yugihealth-=lelouchenemyattack;
            lelouchhealth-=baselineattackpower;
            $(".displayyugihealth").text(yugihealth);
            $(".displaylelouchhealth").text(lelouchhealth);
            if (yugihealth<=0 && lelouchhealth<=0) {
                yugiherohealth=false;
                tieGame();
            }
            else if (yugihealth<=0) {
                yugiherohealth=false;
                HeroDead();
            }
            else if (lelouchhealth<=0) {
                lelouchenemyhealth=false;
                lelouchenemywin=true;
                emptyEverything();
            }
        }

        else if (yugiherohealth && yagamienemyhealth) {
            baselineattackpower+=5;
            $("#herofight").text("Attacked Light Yagami For "+baselineattackpower);
            $("#enemyfight").text("Light Yagami Attacked For " +yagamienemyattack);
            yugihealth-=yagamienemyattack;
            yagamihealth-=baselineattackpower;
            $(".displayyugihealth").text(yugihealth);
            $(".displayyagamihealth").text(yagamihealth);
            if (yugihealth<=0 && yagamihealth<=0) {
                yugiherohealth=false;
                tieGame();
            }
            else if (yugihealth<=0) {
                yugiherohealth=false;
                HeroDead();
            }
            else if (yagamihealth<=0) {
                yagamienemyhealth=false;
                yagamienemywin=true;
                emptyEverything();
            }
        }
        
        wincondition(); //win condition that is triggered. Function is declared later.

        
    });

    //Triggers the win message if you manage to win.
    function winMessage() {
        $(".battlestats").text("You are in fact the protagonist of this anime!").addClass("text-success").css("font-size","2rem")
        $(".hiddenrestart").show();
        $("#enemyDefeat").text("The Enemies Have Been Defeated!")
    }

    //conditions to trigger win scenario for each hero.
    function wincondition() {
        if (lelouchenemywin && yagamienemywin && yugienemywin) {
            winMessage();
            //Cloud as the hero
        }
        else if (cloudenemywin && yagamienemywin && yugienemywin) {
            winMessage();
            //Lelouch as the hero
        }
        else if (cloudenemywin && lelouchenemywin && yugienemywin) {
            winMessage();
            //Light Yagami as the hero
        }
        else if (cloudenemywin && lelouchenemywin && yagamienemywin) {
            winMessage();
            //Yugi as the hero
        }
    };

    //restart function that will only show at the end of the game (win or lose) but agains is hidden till it's called upon.
    $(".restart").on("click", function() {
        location.reload();
    })

  });











