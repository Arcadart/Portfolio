
//Change dark mode
function changeModeColor() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = bodyElement.classList.contains("dark-mode") ? "white" : "";
    });
}