console.log(document.getElementById('text'));

const displayText = document.getElementById("text")
const button = document.getElementById("btn");

button.addEventListener('click', () => {
  setTimeout(() => {
  displayText.textContent='ボタンをクリックしました';
  }, 2000);
  button.click();
});
