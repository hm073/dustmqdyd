document.addEventListener("DOMContentLoaded", () => {
    const progress = document.querySelectorAll(".lo2 progress");

    let i = 0;
    progress.forEach(element => {
        const pValue = element.getAttribute("value");
        
        if(i < pValue) {
            i++;
            element.setAttribute('value', i);
            setTimeout(element.setAttribute('value', i), 10)
        }
    });
});