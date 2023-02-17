import { selector, inputFetch, windowOnLoad } from "./modules/staticFunctions.js";
import { LeftCurrency, LeftInput, RightCurrency, RightInput, setleftCurrent, setrightCurrent, } from "./modules/variables.js";

LeftCurrency.forEach(item => {
    item.addEventListener("click", (e) => {
        selector(LeftCurrency, e);
        setleftCurrent(e.target.innerText);
        inputFetch(LeftInput, RightInput, "right");
    });
});

RightCurrency.forEach(item => {
    item.addEventListener("click", (e) => {
        selector(RightCurrency, e);
        setrightCurrent(e.target.innerText);
        inputFetch(RightInput, LeftInput, "left");
    });
});

LeftInput.addEventListener("keyup", () => inputFetch(RightInput, LeftInput, "left"));
RightInput.addEventListener("keyup", () => inputFetch(LeftInput, RightInput, "right"));
