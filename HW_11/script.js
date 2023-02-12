async function getRandomChinese(length) {
    let sign = "";
    for (let i = 0; i < length; i++) {
        sign += String.fromCharCode(Date.now().toString().slice(-5));
        await new Promise(function(resolve) {
            setTimeout(resolve, 50);
        });
    }
    console.log(sign);
}
getRandomChinese(4);