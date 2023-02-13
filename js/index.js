import { selector, inputFetch, windowOnLoad } from "./modules/staticFunctions.js";
import { LeftCurrency, LeftInput, RightCurrency, RightInput, setleftCurrent, setrightCurrent, } from "./modules/variables.js";

LeftCurrency.forEach(item => {
    item.addEventListener("click", (e) => {
        selector(Leftcurrency, e);
        setleftCurrent(e.target.innerText);
        inputFetch(LeftInput, RightInput);
    });
});

RightCurrency.forEach(item => {
    item.addEventListener("click", (e) => {
        selector(Rightcurrency, e);
        setrightCurrent(e.target.innerText);
        inputFetch(RightInput, LeftInput);
    });
});

LeftInput.addEventListener("keyup", () => inputFetch(RightInput, LeftInput));
RightInput.addEventListener("keyup", () => inputFetch(LeftInput, RightInput));
