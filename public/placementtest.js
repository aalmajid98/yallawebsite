async function loadArabicWords() {
    const response = await fetch('arabicwords.txt');
    const data = await response.text();
  
    const arabArray = data.toString().split('\n');
    return arabArray;
  }
  
  function clearDiv(element, div) {
    const btn = document.getElementById(element);
    const targetDiv = document.getElementById(div);
    btn.addEventListener('click', () => {
      targetDiv.style.display = 'none';
    });
  }
  
  function showDiv(element, div) {
    const btn = document.getElementById(element);
    const targetDiv = document.getElementById(div);
  
    btn.addEventListener('click', () => {
      targetDiv.style.display = 'block';
    });
  }
  
  async function displayArray(button, container) {
    const arabArray = await loadArabicWords();
  
    const display = document.getElementById(container);
    display.innerHTML = '';
  
    const btn = document.getElementById(button);
    btn.addEventListener('click', () => {
      const test = `<p> ${arabArray[0]} </p> `;
      display.innerHTML += test;
    });
  }
  
  displayArray('startB', 'wordContainer');
  



