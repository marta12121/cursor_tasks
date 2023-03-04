function* infGenerator() {
    for (let i = 0; i < Infinity; i++) {
        yield i;
    };
};

export const idGenerator = infGenerator();


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


export const fontSize = newFontSize(14);