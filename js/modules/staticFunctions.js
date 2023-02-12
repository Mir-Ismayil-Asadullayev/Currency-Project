import * as vars from "./variables.js";
import fetchCurrency from "./fetch.js";

const windowOnLoad = window.onload = () => {
    vars.Leftcurrency[0].classList.add("selected-currency");
    vars.Leftcurrency[0].style = "border-top-right-radius: 0; border-bottom-right-radius:0";
    vars.Rightcurrency[1].classList.add("selected-currency");
    vars.Rightcurrency[1].style = "border-radius: 0;";
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
export default windowOnLoad;
