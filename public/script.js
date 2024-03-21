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
