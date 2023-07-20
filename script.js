const responseInput = document.getElementById('response');
const errorDiv = document.getElementById('error');
const linkDiv = document.getElementById('link');
const verifyButton = document.getElementById('verifyButton');
const messageDiv = document.getElementById('message');
const messageText = "I swore to be true since the day one\nthough I couldn't imagine falling for someone\nyou're it to me please know that's my truth\nthe answer is where I contemplated your youth";

verifyButton.addEventListener('click', checkAnswer);
responseInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});

function checkAnswer() {
  const response = responseInput.value.trim().toLowerCase();

  if (response === 'ifma') {
    linkDiv.innerHTML = '<a href="https://mybabeday.tumblr.com/" target="_blank">Clica aqui =)</a>';
    responseInput.value = '';
    errorDiv.textContent = '';
    verifyButton.classList.add('hidden');
  } else {
    errorDiv.textContent = 'Tente novamente';
  }
}

function typeWriterEffect(text, delay) {
  let i = 0;
  const length = text.length;

  function type() {
    if (i < length) {
      const currentChar = text.charAt(i);
      if (currentChar === '\n') {
        messageDiv.innerHTML += '<br>'; 
      } else {
        messageDiv.innerHTML += currentChar;
      }

      i++;
      setTimeout(type, delay);
    }
  }

  type();
}

typeWriterEffect(messageText, 50);