function moveButton() {
    let button = document.getElementById("noBtn");
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

document.getElementById("noBtn").addEventListener("click", moveButton);

function goToNextPage() {
    window.location.href = "yes.html";
}
