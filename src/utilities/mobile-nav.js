// mobile NavBar
const mobileNav = () => {
    const menuBtn = document.querySelector (".header__button");
    const navBar = document.querySelector (".header__link-list");
    const menuBar = document.querySelector (".menu-bar");
    const menuClose = document.querySelector (".menu-close");
    const mainSection = document.querySelector (".main");
    const footerSection = document.querySelector (".footer");

    let isMobileNavOpen = false;

    // Click event 
    menuBtn.addEventListener ('click', () => {
      
        isMobileNavOpen = !isMobileNavOpen;

        if (isMobileNavOpen) {
            menuBar.style.display = "none";
            navBar.style.right = "0";
            menuClose.style.display = "block"; 
            document.body.style.overflowY = "hidden";
            mainSection.style.filter = "blur(2px)";
            footerSection.style.filter = "blur(2px)";
        }
        else {
            menuBar.style.display = "block";
            menuClose.style.display = "none";
            navBar.style.right = "-60%";
            document.body.style.overflowY = "auto";
            mainSection.style.filter = "blur(0)";
            footerSection.style.filter = "blur(0)";
        }
    });
};

export default mobileNav;
