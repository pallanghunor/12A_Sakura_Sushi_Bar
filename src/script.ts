document.querySelector("#login")?.addEventListener("click", () => {
    console.log("login");
    document.querySelector(".login-popup")?.classList.add("active");
});
document.querySelector(".login-popup .close-btn")?.addEventListener("click", () => {
    document.querySelector(".login-popup")?.classList.remove("active");
});