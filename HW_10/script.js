document.addEventListener("DOMContentLoaded", function() {
    let audio = new Audio();
    audio.preload = 'auto';
    document.addEventListener("keydown", function(event) {
        document.querySelectorAll('button').forEach(function(elem) {
            elem.style.transition = "1s";
        });
        const key_code = event.which;
        switch (key_code) {
            case 81:
                audio.src = 'sounds/sound1.mp3';
                audio.play();
                document.getElementById("btn_1").style.width = "9%";
                document.getElementById("btn_1").style.height = "65px";
                break;

            case 87:
                audio.src = 'sounds/sound2.mp3';
                audio.play();
                document.getElementById("btn_2").style.width = "9%";
                document.getElementById("btn_2").style.height = "65px";
                break;
            case 69:
                audio.src = 'sounds/sound3.mp3';
                audio.play();
                document.getElementById("btn_3").style.width = "9%";
                document.getElementById("btn_3").style.height = "65px";
                break;
            case 82:
                audio.src = 'sounds/sound4.mp3';
                audio.play();
                document.getElementById("btn_4").style.width = "9%";
                document.getElementById("btn_4").style.height = "65px";
                break;
            case 84:
                audio.src = 'sounds/sound5.mp3';
                audio.play();
                document.getElementById("btn_5").style.width = "9%";
                document.getElementById("btn_5").style.height = "65px";
                break;
            case 89:
                audio.src = 'sounds/sound6.mp3';
                audio.play();
                document.getElementById("btn_6").style.width = "9%";
                document.getElementById("btn_6").style.height = "65px";
                break;
            case 85:
                audio.src = 'sounds/sound7.mp3';
                audio.play();
                document.getElementById("btn_7").style.width = "9%";
                document.getElementById("btn_7").style.height = "65px";
                break;
            case 73:
                audio.src = 'sounds/sound8.mp3';
                audio.play();
                document.getElementById("btn_8").style.width = "9%";
                document.getElementById("btn_8").style.height = "65px";
                break;
            case 79:
                audio.src = 'sounds/sound9.mp3';
                audio.play();
                document.getElementById("btn_9").style.width = "9%";
                document.getElementById("btn_9").style.height = "65px";
                break;

        }
    });
    document.addEventListener("keyup", function(event) {
        document.querySelectorAll('button').forEach(function(elem) {
            elem.style.width = "7%";
            elem.style.height = "55px";
        });
        audio.pause();
    });


});