function onClick() {
    let menu = document.querySelector("ul.nav-links");
    if(menu.style.display.match("inline-block")){
        menu.style.display = "none"
    }else{
        menu.style.display = "inline-block"
    }
}