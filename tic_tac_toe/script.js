var chance = "Player 1" //by default chance of player1
var player = chance + "'s chance"
var disabledBtn = 0

document.getElementById("chance").innerHTML = player



function check() {
    var btn1 = document.getElementById("btn1").innerHTML
    var btn2 = document.getElementById("btn2").innerHTML
    var btn3 = document.getElementById("btn3").innerHTML
    var btn4 = document.getElementById("btn4").innerHTML
    var btn5 = document.getElementById("btn5").innerHTML
    var btn6 = document.getElementById("btn6").innerHTML
    var btn7 = document.getElementById("btn7").innerHTML
    var btn8 = document.getElementById("btn8").innerHTML
    var btn9 = document.getElementById("btn9").innerHTML
    var result = document.getElementById("resultText")
    var reset = document.getElementById("reset-btn")
    var chanceElement = document.getElementById("chance");


    if (btn1 === "x" && btn2 === "x" && btn3 === "x") {
        disable()
        result.innerHTML = "🎊 Player 1 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }


    else if (btn4 === "x" && btn5 === "x" && btn6 === "x") {
        disable()
        result.innerHTML = "🎊 Player 1 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn7 === "x" && btn8 === "x" && btn9 === "x") {
        disable()
        result.innerHTML = "🎊 Player 1 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn1 === "x" && btn4 === "x" && btn7 === "x") {
        disable()
        result.innerHTML = "🎊 Player 1 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn2 === "x" && btn5 == "x" && btn8 === "x") {
        disable()
        result.innerHTML = "🎊 Player 1 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn3 === "x" && btn6 === "x" && btn9 === "x") {
        disable()
        result.innerHTML = "🎊 Player 1 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn1 === "x" && btn5 === "x" && btn9 === "x") {
        disable()
        result.innerHTML = "🎊 Player 1 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn3 === "x" && btn5 === "x" && btn7 === "x") {
        disable()
        result.innerHTML = "🎊 Player 1 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn1 === "o" && btn2 === "o" && btn3 === "o") {
        disable()
        result.innerHTML = "🎊 Player 2 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn4 === "o" && btn5 === "o" && btn6 === "o") {
        disable()
        result.innerHTML = "🎊 Player 2 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn7 === "o" && btn8 === "o" && btn9 === "o") {
        disable()
        result.innerHTML = "🎊 Player 2 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn1 === "o" && btn4 === "o" && btn7 === "o") {
        disable()
        result.innerHTML = "🎊 Player 2 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn2 === "o" && btn5 == "o" && btn8 === "o") {
        disable()
        result.innerHTML = "🎊 Player 2 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn3 === "o" && btn6 === "o" && btn9 === "o") {
        disable()
        result.innerHTML = "🎊 Player 2 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn1 === "o" && btn5 === "o" && btn9 === "o") {
        disable()
        result.innerHTML = "🎊 Player 2 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

    else if (btn3 === "o" && btn5 === "o" && btn7 === "o") {
        disable()
        result.innerHTML = "🎊 Player 2 won ! 🎊"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
        playWinSound();
    }

     //draw 

     else if (disabledBtn === 9) {
        disable()
        result.innerHTML = "OOPS😢! Match Draw ! "
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        chanceElement.style.visibility = "hidden";
    }
}

function disableBtn(id) {

    var btn = document.getElementById(id);

    if (!btn.disabled) {
        playButtonClickSound();


    if (chance === "Player 1") {
    document.getElementById(id).disabled = true;
     document.getElementById(id).innerHTML = "x"
     chance = "Player 2"

     //we want that it update again and again
     var player = chance + "'s chance"
     document.getElementById("chance").innerHTML = player

     disabledBtn = disabledBtn + 1
        check()
    }

    else if (chance === "Player 2") {
        document.getElementById(id).disabled = true;
     document.getElementById(id).innerHTML = "o"
     chance = "Player 1"

     var player = chance + "'s chance"
     document.getElementById("chance").innerHTML = player

     disabledBtn = disabledBtn + 1
        check()
    }

    //to play sound
    btn.disabled = true;
}

   
}

function disable() {
    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = true
    }
     document.getElementById("reset-btn").style.visibility = "visible"
    document.getElementById("resultText").style.visibility = "visible"
}


function reset() {
    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = false
         document.getElementById(id).innerHTML = ""
    }

    chance = "Player 1"
    player = chance + "'s chance"
    document.getElementById("chance").innerHTML = player
     document.getElementById("reset-btn").style.visibility = "hidden"
    document.getElementById("resultText").style.visibility = "hidden"
    document.getElementById("chance").style.visibility = "visible"
   

    disabledBtn = 0
}

function playButtonClickSound() {
    var audio = document.getElementById("buttonClickSound");
    audio.currentTime = 0; 
    audio.play();
}

function playWinSound() {
    var audio = document.getElementById("winSound");
    audio.currentTime = 0; 
    audio.play();
}