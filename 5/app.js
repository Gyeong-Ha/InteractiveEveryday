const buttonContainer = document.getElementById("button-container");
const clickButton = document.getElementById("click-button");
const resultText = document.getElementById("result-text");

// 버튼 클릭 시 동작
buttonContainer.addEventListener("click", () => {
    buttonContainer.style.boxShadow = "none"; // 그림자 제거
    buttonContainer.style.backgroundColor = "#f2f2f2"; // 배경색 변경
    buttonContainer.style.cursor = "default"; // 커서 모양 변경
    clickButton.style.display = "none"; // 버튼 텍스트 숨김
    resultText.style.display = "block"; // 결과 텍스트 표시
});