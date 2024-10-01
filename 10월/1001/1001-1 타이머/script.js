let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25분을 초로 변환

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("시간이 다 되었습니다! 잠시 쉬세요.");
            timeLeft = 5 * 60; // 5분 휴식
            updateDisplay();
            startTimer(); // 자동으로 휴식 타이머 시작
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60; // 기본 작업 시간으로 초기화
    isRunning = false;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay(); // 초기 표시
