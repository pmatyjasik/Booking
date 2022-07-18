const showMenu = () => {
    let menu = document.getElementById('mobile-menu');
    if (menu){
        menu.classList.toggle("visible");
        menu.classList.toggle("hidden");
    }
}