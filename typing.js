document.addEventListener("DOMContentLoaded", function() {
  const heading = document.getElementById('mavericks-heading');
  const text = heading.innerHTML;
  heading.innerHTML = '';
  
  let index = 0;
  
  function typeLetter() {
    if (index < text.length) {
      heading.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeLetter, 100); // Adjust the speed here
    }
  }
  
  typeLetter();
  console.log('Hi');
});