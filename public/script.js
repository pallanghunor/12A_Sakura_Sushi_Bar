"use strict";
var _a, _b;
(_a = document.querySelector("#login")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    var _a;
    console.log("login");
    (_a = document.querySelector(".login-popup")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
});
(_b = document.querySelector(".login-popup .close-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    var _a;
    (_a = document.querySelector(".login-popup")) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    console.log("scroll");
    console.log(window.scrollY);
    const header = document.querySelector(".navbar");
    if (window.scrollY >= 50)
        header === null || header === void 0 ? void 0 : header.classList.add("bg-header");
    else
        header === null || header === void 0 ? void 0 : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
