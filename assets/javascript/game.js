// Health of all the cards of heroes and enemies.
var cloudhealth=500;
var lelouchhealth=600;
var yagamihealth=700;
var yugihealth=800

// Attack power of the hero and enemy.
var baselineattackpower=5; //The hero you picked's attack power (which will increase as the game goes on)
var cloudenemyattack=20;
var lelouchenemyattack=30;
var yagamienemyattack=45;
var yugienemyattack=50;


// Booleans to trigger code when you pick a hero.
var cloudherohealth=false;
var lelouchherohealth=false;
var yagamiherohealth=false;
var yugiherohealth=false;

// Booleans to trigger code when you pick an enemy.
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
  
    $(".hiddencontent").hide();
    $(".hiddenrestart").hide();

    
    $(".displaycloudhealth").text(cloudhealth);
    $(".displaylelouchhealth").text(lelouchhealth);
    $(".displayyagamihealth").text(yagamihealth);
    $(".displayyugihealth").text(yugihealth);
    

    $(".cloudherobtn").on("click", function() {
        console.log("This works!");
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
        console.log("This works!");
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
        console.log("This works!");
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
        console.log("This works!");
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

    // Enemy Buttons and Cards
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

    //Attack Button
    $(".attack").on("click", function() {

        
        // Code Base if Cloud Strife is the Hero
        if (cloudherohealth && lelouchenemyhealth) {
            $("#herofight").text("Attacked Lelouch For "+baselineattackpower);
            $("#enemyfight").text("Lelouch Attacked For " +lelouchenemyattack);
            baselineattackpower=baselineattackpower+5;
            cloudhealth=cloudhealth-lelouchenemyattack;
            lelouchhealth=lelouchhealth-baselineattackpower;
            $(".displaycloudhealth").text(cloudhealth);
            $(".displaylelouchhealth").text(lelouchhealth);
            if (lelouchhealth<=0) {
                lelouchenemyhealth=false;
                lelouchenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (cloudhealth<=0) {
                $(".hiddenrestart").show();
                cloudherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
            console.log(cloudhealth);
        }

        else if (cloudherohealth && yagamienemyhealth) {
            $("#herofight").text("Attacked Light Yagami For "+baselineattackpower);
            $("#enemyfight").text("Light Yagami Attacked For " +yagamienemyattack);
            baselineattackpower=baselineattackpower+15;
            cloudhealth=cloudhealth-yagamienemyattack;
            yagamihealth=yagamihealth-baselineattackpower;
            $(".displaycloudhealth").text(cloudhealth);
            $(".displayyagamihealth").text(yagamihealth);
            if (yagamihealth<=0) {
                yagamienemyhealth=false;
                yagamienemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (cloudhealth<=0) {
                $(".hiddenrestart").show();
                cloudherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
        }

        else if (cloudherohealth && yugienemyhealth) {
            $("#herofight").text("Attacked Yugi Moto For "+baselineattackpower);
            $("#enemyfight").text("Yugi Moto Attacked For " +yugienemyattack);
            baselineattackpower=baselineattackpower+15;
            cloudhealth=cloudhealth-yugienemyattack;
            yugihealth=yugihealth-baselineattackpower;
            $(".displaycloudhealth").text(cloudhealth);
            $(".displayyugihealth").text(yugihealth);
            if (yugihealth<=0) {
                yugienemyhealth=false;
                yugienemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (cloudhealth<=0) {
                $(".hiddenrestart").show();
                cloudherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
        }

        //Code Base if Lelouch is the Hero
        if (lelouchherohealth && cloudenemyhealth) {
            $("#herofight").text("Attacked Cloud Strife For "+baselineattackpower);
            $("#enemyfight").text("Cloud Strife Attacked For " +cloudenemyattack);
            baselineattackpower=baselineattackpower+15;
            lelouchhealth=lelouchhealth-cloudenemyattack;
            cloudhealth=cloudhealth-baselineattackpower;
            $(".displaylelouchhealth").text(lelouchhealth);
            $(".displaycloudhealth").text(cloudhealth);
            if (cloudhealth<=0) {
                cloudenemyhealth=false;
                cloudenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (lelouchhealth<=0) {
                $(".hiddenrestart").show();
                lelouchherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }

        }

        else if (lelouchherohealth && yagamienemyhealth) {
            $("#herofight").text("Attacked Light Yagami For "+baselineattackpower);
            $("#enemyfight").text("Light Yagami Attacked For " +yagamienemyattack);
            baselineattackpower=baselineattackpower+15;
            lelouchhealth=lelouchhealth-yagamienemyattack;
            yagamihealth=yagamihealth-baselineattackpower;
            $(".displaylelouchhealth").text(lelouchhealth);
            $(".displayyagamihealth").text(yagamihealth);
            if (yagamihealth<=0) {
                yagamienemyhealth=false;
                yagamienemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (lelouchhealth<=0) {
                $(".hiddenrestart").show();
                lelouchherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
        }

        else if (lelouchherohealth && yugienemyhealth) {
            $("#herofight").text("Attacked Yugi Moto For "+baselineattackpower);
            $("#enemyfight").text("Yugi Moto Attacked For " +yugienemyattack);
            baselineattackpower=baselineattackpower+15;
            lelouchhealth=lelouchhealth-yugienemyattack;
            yugihealth=yugihealth-baselineattackpower;
            $(".displaylelouchhealth").text(lelouchhealth);
            $(".displayyugihealth").text(yugihealth);
            if (yugihealth<=0) {
                yugienemyhealth=false;
                yugienemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (lelouchhealth<=0) {
                $(".hiddenrestart").show();
                lelouchherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
        }

        //Code base if Light Yagami is picked as the hero.
        if (yagamiherohealth && cloudenemyhealth) {
            $("#herofight").text("Attacked Cloud Strife For "+baselineattackpower);
            $("#enemyfight").text("Cloud Strife Attacked For " +cloudenemyattack);
            baselineattackpower=baselineattackpower+15;
            yagamihealth=yagamihealth-cloudenemyattack;
            cloudhealth=cloudhealth-baselineattackpower;
            $(".displayyagamihealth").text(yagamihealth);
            $(".displaycloudhealth").text(cloudhealth);
            if (cloudhealth<=0) {
                cloudenemyhealth=false;
                cloudenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (yagamihealth<=0) {
                $(".hiddenrestart").show();
                yagamiherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }

        }

        else if (yagamiherohealth && lelouchenemyhealth) {
            $("#herofight").text("Attacked Lelouch For "+baselineattackpower);
            $("#enemyfight").text("Lelouch Attacked For " +lelouchenemyattack);
            baselineattackpower=baselineattackpower+15;
            yagamihealth=yagamihealth-lelouchenemyattack;
            lelouchhealth=lelouchhealth-baselineattackpower;
            $(".displayyagamihealth").text(yagamihealth);
            $(".displaylelouchhealth").text(lelouchhealth);
            if (lelouchhealth<=0) {
                lelouchenemyhealth=false;
                lelouchenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (yagamihealth<=0) {
                $(".hiddenrestart").show();
                yagamiherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
        }

        else if (yagamiherohealth && yugienemyhealth) {
            $("#herofight").text("Attacked Yugi Moto For "+baselineattackpower);
            $("#enemyfight").text("Yugi Moto Attacked For " +yugienemyattack);
            baselineattackpower=baselineattackpower+15;
            yagamihealth=yagamihealth-yugienemyattack;
            yugihealth=yugihealth-baselineattackpower;
            $(".displayyagamihealth").text(yagamihealth);
            $(".displayyugihealth").text(yugihealth);
            if (yugihealth<=0) {
                yugienemyhealth=false;
                yugienemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (yagamihealth<=0) {
                $(".hiddenrestart").show();
                yagamiherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
        }

        //Code Base for when Yugi Moto is picked as the hero.

        if (yugiherohealth && cloudenemyhealth) {
            $("#herofight").text("Attacked Cloud Strife For "+baselineattackpower);
            $("#enemyfight").text("Cloud Strife Attacked For " +cloudenemyattack);
            baselineattackpower=baselineattackpower+15;
            yugihealth=yugihealth-cloudenemyattack;
            cloudhealth=cloudhealth-baselineattackpower;
            $(".displayyugihealth").text(yugihealth);
            $(".displaycloudhealth").text(cloudhealth);
            if (cloudhealth<=0) {
                cloudenemyhealth=false;
                cloudenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (yugihealth<=0) {
                $(".hiddenrestart").show();
                yugiherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }

        }

        else if (yugiherohealth && lelouchenemyhealth) {
            $("#herofight").text("Attacked Lelouch For "+baselineattackpower);
            $("#enemyfight").text("Lelouch Attacked For " +lelouchenemyattack);
            baselineattackpower=baselineattackpower+15;
            yugihealth=yugihealth-lelouchenemyattack;
            lelouchhealth=lelouchhealth-baselineattackpower;
            $(".displayyugihealth").text(yugihealth);
            $(".displaylelouchhealth").text(lelouchhealth);
            if (lelouchhealth<=0) {
                lelouchenemyhealth=false;
                lelouchenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (yugihealth<=0) {
                $(".hiddenrestart").show();
                yugiherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
        }

        else if (yugiherohealth && yagamienemyhealth) {
            $("#herofight").text("Attacked Light Yagami For "+baselineattackpower);
            $("#enemyfight").text("Light Yagami Attacked For " +yagamienemyattack);
            baselineattackpower=baselineattackpower+15;
            yugihealth=yugihealth-yagamienemyattack;
            yagamihealth=yagamihealth-baselineattackpower;
            $(".displayyugihealth").text(yugihealth);
            $(".displayyagamihealth").text(yagamihealth);
            if (yagamihealth<=0) {
                yagamienemyhealth=false;
                yagamienemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".cloudenemybtn, .lelouchenemybtn, .yagamienemybtn, .yugienemybtn").show();
            }
            else if (yugihealth<=0) {
                $(".hiddenrestart").show();
                yugiherohealth=false;
                $(".battlestats").text("You are not the protagonist of this anime.");
            }
        }

        wincondition();

        
    });

    //conditions to trigger win scenario
    function wincondition() {
        if (lelouchenemywin && yagamienemywin && yugienemywin) {
            $(".battlestats").text("You are in fact the protagonist of this anime!");
            $(".hiddenrestart").show();
            console.log("you should get a message")
        }

        else if (cloudenemywin && yagamienemywin && yugienemywin) {
            $(".battlestats").text("You are in fact the protagonist of this anime!");
            $(".hiddenrestart").show();
            console.log("you should get a message")
        }

        else if (cloudenemywin && lelouchenemywin && yugienemywin) {
            $(".battlestats").text("You are in fact the protagonist of this anime!");
            $(".hiddenrestart").show();
            console.log("you should get a message")
        }

        else if (cloudenemywin && lelouchenemywin && yagamienemywin) {
            $(".battlestats").text("You are in fact the protagonist of this anime!");
            $(".hiddenrestart").show();
            console.log("you should get a message")
        }
        
    };

    //restart function that will only show at the end of the game (win or lose)
    $(".restart").on("click", function() {
        location.reload();
    })


  });











