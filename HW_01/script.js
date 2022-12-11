const LEMON_PRICE = 15.678;
const MANGO_PRICE = 123.965;
const MELON_PRICE = 90.2345;

//1
const maxPrice = Math.max(LEMON_PRICE, MANGO_PRICE, MELON_PRICE);
document.writeln(`<p>1. Mаксимальне число : ${maxPrice}.</p>`);

//2
const minPrice = Math.min(LEMON_PRICE, MANGO_PRICE, MELON_PRICE);
document.writeln(`<p>2. Mінімальне число : ${minPrice}.</p>`);

//3
const sumOfPrices = LEMON_PRICE + MANGO_PRICE + MELON_PRICE;
document.writeln(`<p>3. Вартість всіх товарів: ${sumOfPrices}.</p>`);

//4
const sumOfIntegerPrices = Math.floor(LEMON_PRICE) + Math.floor(MANGO_PRICE) + Math.floor(MELON_PRICE);
document.writeln(`<p>4. Сума цілих частин кожної ціни, округлених в меншу сторону : ${sumOfIntegerPrices}.</p>`);

//5
const intSum = sumOfPrices / 100;
document.writeln(`<p>5. Сума товарів округлена до сотень : ${Math.floor(intSum)*100}.</p>`);

//6
if (sumOfIntegerPrices % 2 === 0) {
    document.writeln(`<p>6. Сума цілих частин кожної ціни, округлених в меншу сторону : ${sumOfIntegerPrices} є парним числом: ${true}.</p>`);
} else {
    document.writeln(`<p>6. Сума цілих частин кожної ціни, округлених в меншу сторону : ${sumOfIntegerPrices} є непарним числом: ${false}.</p>`);

}

//7
document.writeln(`<p>7. Сумa решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500грн. : ${500-sumOfPrices}грн.</p>`);

//8
const averageValue = sumOfPrices / 3;
document.writeln(`<p>8. Середнє значення цін, округлене до другого знаку після коми : ${averageValue.toFixed(2)}грн.</p>`);

//9
const randSale = Math.floor(Math.random() * 100);
document.writeln(`<p>9. Випадкова знижка : ${randSale}%.</p>`);

//10
const percentages = sumOfPrices / 100 * randSale;
const sumWithSale = (sumOfPrices - percentages).toFixed(2);
document.writeln(`<p>10. Cума до оплати з випадковою знижкою : ${sumWithSale}грн.</p>`);

//11
const netProfit = sumOfPrices / 2;
document.writeln(`<p>11. Чистий прибуток : ${(sumWithSale-netProfit)}(${(sumWithSale-netProfit).toFixed(2)})грн.</p>`);