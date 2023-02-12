import windowOnLoad from "./modules/staticFunctions.js";
import fetchCurrency from "./modules/fetch.js";
import {
    getleftCurrent,
    getrightCurrent,
    Leftcurrency,
    LeftInput,
    LeftOneResult,
    LeftSecondResult,
    Rightcurrency,
    RightInput,
    RightOneResult,
    RightSecondResult,
    setleftCurrent, setrightCurrent,
} from "./modules/variables.js";
windowOnLoad;
const insertions = (res) => {
    LeftOneResult.innerText = res.left + " " + getrightCurrent();
    LeftSecondResult.innerText = getleftCurrent();
    RightOneResult.innerText = res.right + " " + getleftCurrent();
    RightSecondResult.innerText = getrightCurrent();
}
const leftFetch = () => {
    fetchCurrency(getleftCurrent(), getrightCurrent())
        .then(res => {
            LeftInput.value = Number(RightInput.value * res.right).toFixed(4);
            insertions(res)
        })
        .catch(() => alert("It seems we have a problem with network or another issue. Try to reload page, or come back later"));
}
const rightFetch = () => {
    fetchCurrency(getleftCurrent(), getrightCurrent())
        .then(res => {
            RightInput.value = Number(LeftInput.value * res.left).toFixed(4);
            insertions(res)
        })
        .catch(() => alert("It seems we have a problem with network or another issue. Try to reload page, or come back later"));
}
const classes = (item2, item) => {
    item2.classList.remove("selected-currency");
    let arr = item2.classList.value.split(" ");
    if (arr.includes("selected-currency")) {
        item.classList.remove("selected-currency");
    } else {
        item.classList.add("selected-currency");
        if (item2.innerText === "RUB") {
            item2.style = "border-top-right-radius: 0; border-bottom-right-radius:0";
        } else if (item2.innerText === "USD" || item2.innerText === "EUR") {
            item2.style = "border-radius: 0;";
        } else if (item2.innerText === "GBP") {
            item2.style = "border-top-left-radius: 0; border-bottom-left-radius:0";
        }
    }
}
Leftcurrency.forEach(item => {
    item.addEventListener("click", (e) => {
        Leftcurrency.forEach(item2 => classes(item2, item));
        setleftCurrent(e.target.innerText);
        leftFetch()
    });
});
Rightcurrency.forEach(item => {
    item.addEventListener("click", (e) => {
        Rightcurrency.forEach(item2 => classes(item2, item));
        setrightCurrent(e.target.innerText);
        rightFetch()
    });
});
LeftInput.addEventListener("keyup", () => rightFetch());
RightInput.addEventListener("keyup", () => leftFetch());
