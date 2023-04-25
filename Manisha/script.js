document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

function toggleNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "w-full block flex-grow lg:flex lg:items-center lg:w-auto") {
        x.className += " hidden";
    } else {
        x.className = "w-full block flex-grow lg:flex lg:items-center lg:w-auto";
    }
}