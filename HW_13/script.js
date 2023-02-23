function* infGenerator() {
    for (let i = 0; i < Infinity; i++) {
        yield i;
    };
};

const idGenerator = infGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

/////////
const btn_up = document.getElementById("up");
const btn_down = document.getElementById("down");
const text = document.getElementById("text");

function renderSize(fz) {
    text.style.fontSize = `${fz}px`;
}

function* newFontSize(fz) {
    let currSize = fz;
    for (let i = 0; i < Infinity; i++) {
        let x = yield currSize;
        if (x === "up") {
            currSize += 2;
            renderSize(currSize);
        }
        if (x === "down") {
            currSize -= 2;
            renderSize(currSize);
        };
    };
};


const fontSize = newFontSize(14);
// btn_up.addEventListener("click", fontSize.next("up"));
// btn_down.addEventListener("click", fontSize.next("down"));