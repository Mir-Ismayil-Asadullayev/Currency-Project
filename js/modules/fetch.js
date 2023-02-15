export default async function fetchCurrency(leftCurrency, rightCurrency) {
    if (leftCurrency === rightCurrency) {
        return {
            left: 1,
            right: 1
        };
    } else {
        let resLeft = await fetch(`https://api.exchangerate.host/convert?from=${leftCurrency}&to=${rightCurrency}`);
        let resRight = await fetch(`https://api.exchangerate.host/convert?from=${rightCurrency}&to=${leftCurrency}`);
        let dataLeft = await resLeft.json();
        let dataRight = await resRight.json();
        return {
            left: dataLeft.result.toFixed(4),
            right: dataRight.result.toFixed(4)
        };
    }
}
