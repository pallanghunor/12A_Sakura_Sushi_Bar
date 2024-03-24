document.querySelector("#login")?.addEventListener("click", () => {
    console.log("login");
    document.querySelector(".login-popup")?.classList.add("active");
});
document.querySelector(".login-popup .close-btn")?.addEventListener("click", () => {
    document.querySelector(".login-popup")?.classList.remove("active");
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    console.log("scroll");
    console.log(window.scrollY);
    const header = document.querySelector(".navbar");
    if (window.scrollY >= 50) header?.classList.add("bg-header");
    else header?.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);