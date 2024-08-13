document.addEventListener('DOMContentLoaded', function() {
    const progressElements = document.querySelectorAll('#skill progress');

    function ani(i, t, d) {
        const startValue = parseInt(i.value, 10);
        const stepTime = 10;
        const steps = d / stepTime;
        const stepValue = (t - startValue) / steps;
        let currentStep = 0;

        function update() {
            if (currentStep < steps) {
                i.value = Math.round(startValue + stepValue * currentStep);
                currentStep++;
                requestAnimationFrame(update);
            } else {
                i.value = t;
            }
        }

        requestAnimationFrame(update);
    }

    function onScroll() {
        if (window.scrollY > 400) {
            progressElements.forEach((i, index) => {
                setTimeout(() => {
                    const t = parseInt(i.textContent, 10);
                    ani(i, t, 1000);
                }, index * 200);
            });

            // Remove scroll event listener after animation
            window.removeEventListener('scroll', onScroll);
        }
    }

    window.addEventListener('scroll', onScroll);
});