document.querySelector("#login")?.addEventListener("click", () => {
    console.log("login");
    document.querySelector(".login-popup")?.classList.add("active");
});
document.querySelector(".login-popup .close-btn")?.addEventListener("click", () => {
    document.querySelector(".login-popup")?.classList.remove("active");
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
// const scrollHeader = () => {
//     const header = document.querySelector("#header");
//     if (this.scrollY >= 50) header?.classList.add("scroll-header");
//     else header?.classList.remove("scroll-header");
// };
// window.addEventListener("scroll", scrollHeader);