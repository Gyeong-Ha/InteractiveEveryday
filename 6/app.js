const buttonContainer = document.getElementById("button-container");
const clickButton = document.getElementById("click-button");
const resultText = document.getElementById("result-text");

// 초기 상태 설정
resultText.style.display = "none";

// 마우스 누를 때 (:o 표시)
buttonContainer.addEventListener("mousedown", () => {
    buttonContainer.style.boxShadow = "none"; // 그림자 제거
    buttonContainer.style.backgroundColor = "#dcdcdc"; // 배경색 변경
    buttonContainer.style.cursor = "default"; // 커서 모양 변경
    clickButton.style.display = "none"; // 버튼 텍스트 숨김
    resultText.style.display = "block"; // 결과 텍스트 표시
    resultText.textContent = ":o";
});

// 마우스를 뗄 때 (:D 표시)
buttonContainer.addEventListener("mouseup", () => {
    buttonContainer.style.boxShadow = "none"; // 그림자 제거
    buttonContainer.style.backgroundColor = "#f2f2f2"; // 배경색 변경
    buttonContainer.style.cursor = "default"; // 커서 모양 변경
    clickButton.style.display = "none"; // 버튼 텍스트 숨김
    resultText.style.display = "block"; // 결과 텍스트 표시
    resultText.textContent = ":D";
});
