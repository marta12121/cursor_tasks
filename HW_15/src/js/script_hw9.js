let randomColor = Math.floor(Math.random() * 16777215).toString(16);
document.addEventListener("DOMContentLoaded", generateBlocks(), generateBlocksInterval());

function generateColor() {
    document.querySelectorAll('.block').forEach(function(elem) {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        elem.style.background = `#${randomColor}`;
    });
}

function generateBlocks() {
    const mainContainer = document.createElement("div");
    for (let i = 0; i < 5; i++) {
        document.querySelector(".container").appendChild(document.createElement("div")).classList.add("row");
    }
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName("row")[i].appendChild(document.createElement("div")).classList.add("block");
            generateColor();
        }
    }
}

function generateBlocksInterval() {
    setInterval(() => {
        generateColor();
    }, 1000);
}