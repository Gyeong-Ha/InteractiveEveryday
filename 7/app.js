const buttonContainer = document.getElementById('button-container');
const clickButton = document.getElementById('click-button');

// 초기 문구 설정
let isClicked = false;
clickButton.textContent = "Click me!";

// 클릭 이벤트 핸들러
buttonContainer.addEventListener('mousedown', () => {
    clickButton.textContent = ":o";
    buttonContainer.classList.add('active');
    isClicked = true;
});

// 마우스 버튼을 뗐을 때 이벤트 핸들러
buttonContainer.addEventListener('mouseup', () => {
    clickButton.textContent = ":D";
    buttonContainer.classList.remove('active');
    isClicked = false;
});
