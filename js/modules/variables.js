export let Leftcurrency = document.querySelectorAll(".left-side>.currency-container>.currency");
export let Rightcurrency = document.querySelectorAll(".right-side>.currency-container>.currency");
export let LeftInput = document.querySelector("#left-input");
export let RightInput = document.querySelector("#right-input");
export let LeftOneResult = document.querySelector(".one-left-result");
export let RightOneResult = document.querySelector(".one-right-result");
export let LeftSecondResult = document.querySelector(".second-left-result");
export let RightSecondResult = document.querySelector(".second-right-result");
export let leftCurrent = "RUB";
export let rightCurrent = "USD";

export const getleftCurrent = () => leftCurrent;
export const setleftCurrent = (value) => (leftCurrent = value);

export const getrightCurrent = () => rightCurrent;
export const setrightCurrent = (value) => (rightCurrent = value);

export * from "./variables.js";
