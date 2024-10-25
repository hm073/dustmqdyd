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
});//end