export default async function fetchCurrency(leftCurrency, rightCurrency) {
    if (leftCurrency === rightCurrency) {
        return { left: 0, right: 0 };
    } else {
        let resLeft = await fetch(`https://api.exchangerate.host/convert?from=${leftCurrency.toUpperCase()}&to=${rightCurrency.toUpperCase()}`);
        let resRight = await fetch(`https://api.exchangerate.host/convert?from=${rightCurrency.toUpperCase()}&to=${leftCurrency.toUpperCase()}`);
        let dataLeft = await resLeft.json();
        let dataRight = await resRight.json();
        return { left: dataLeft.result.toFixed(4), right: dataRight.result.toFixed(4) };
    }
}
