document.getElementById("yesBtn").addEventListener("click", function() {

    document.getElementById("response").innerText = "Yay! I love you ❤️";

});

document.getElementById("noBtn").addEventListener("mouseover", function() {

    this.style.left = Math.random() * window.innerWidth + "px";

    this.style.top = Math.random() * window.innerHeight + "px";

});