console.log("Script started");

function changeColor() {
    let p = document.getElementById("poem");
    let color = prompt("Enter a color name");
    p.style.color = color;
}

function changeFontSize() {
    let p = document.getElementById("poem");
    let size = prompt("Enter a new font size");
    p.style.fontSize = size + "px";
}

function changePoem() {
    let h1 = document.getElementById("title");
    let title = prompt("Enter the title of the poem");
    h1.innerText = title;

    let p = document.getElementById("poem");
    let text = prompt("Enter the text of the new poem");
    p.innerText = text;

}