document.addEventListener("DOMContentLoaded", () => {

    const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    btn.addEventListener("click", function(){

        const randomNumver = getRandomNumber();

        document.body.style.backgroundColor = colors[randomNumver];
        color.textContent = colors[randomNumver];

    });

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }

});