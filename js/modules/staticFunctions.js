import * as vars from "./variables.js";
import fetchCurrency from "./fetch.js";

export const windowOnLoad = window.onload = () => {
    vars.LeftCurrency[0].classList.add("selected-currency");
    vars.LeftCurrency[0].style = "border-top-right-radius: 0; border-bottom-right-radius:0";
    vars.RightCurrency[1].classList.add("selected-currency");
    vars.RightCurrency[1].style = "border-radius: 0;";
    fetchCurrency(vars.leftCurrent, vars.rightCurrent)
        .then(res => {
            vars.RightInput.value = vars.LeftInput.value * res.left;
            vars.LeftOneResult.innerText = res.left + " " + vars.rightCurrent;
            vars.RightOneResult.innerText = res.right + " " + vars.leftCurrent;
            vars.LeftSecondResult.innerText = vars.leftCurrent;
            vars.RightSecondResult.innerText = vars.rightCurrent;
        })
        .catch(() => alert("It seems we have a problem with network or another issue. Try to reload page, or come back later"));
}

export const inputFetch = (inputFirst, inputSecond) => {
    fetchCurrency(vars.getleftCurrent(), vars.getrightCurrent())
        .then(res => {
            inputFirst.value = Number(inputSecond.value * res.left).toFixed(4);
            vars.LeftOneResult.innerText = res.left + " " + vars.getrightCurrent();
            vars.LeftSecondResult.innerText = vars.getleftCurrent();
            vars.RightOneResult.innerText = res.right + " " + vars.getleftCurrent();
            vars.RightSecondResult.innerText = vars.getrightCurrent();
        })
        .catch(() => alert("It seems we have a problem with network or another issue. Try to reload page, or come back later"));
}

export const selector = (side, e) => {
    side.forEach(btn => {
        if (btn.innerText === e.target.innerText) {
            btn.classList.add("selected-currency");
            if (e.target.innerText === "RUB") {
                e.target.style = "border-top-right-radius: 0; border-bottom-right-radius:0";
            } else if (e.target.innerText === "USD" || e.target.innerText === "EUR") {
                e.target.style = "border-radius: 0;";
            } else if (e.target.innerText === "GBP") {
                e.target.style = "border-top-left-radius: 0; border-bottom-left-radius:0";
            }
        } else {
            btn.classList.remove("selected-currency")
        }
    })
}
