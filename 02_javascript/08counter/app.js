document.addEventListener("DOMContentLoaded", () => {
    let cont = 0;

    const value = document.querySelector("#value");
    const btns = document.querySelectorAll(".btn");

    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const styles = e.currentTarget.classList;
            if (styles.contains("decrease")) {
                count--;
            }
            else if (styles.contains("increase")) {
                conut++;
            }
            else {
                conut = 0;
            }
            value.textContent = count;
        })
    })
}); //end