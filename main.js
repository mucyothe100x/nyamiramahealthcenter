function toggleTheme() {
  var body = document.body;
  var heroSection = document.querySelector('.hero');
  var themeButton = document.getElementById('theme-toggle');

  if (body.classList.contains('dark-mode')) {
    // Switch to light mode
    body.classList.remove('dark-mode');
    heroSection.classList.remove('dark-bg');
    themeButton.textContent = 'Light Mode';
    themeButton.style.color = '#000'; // Set text color to black for light mode
  } else {
    // Switch to dark mode
    body.classList.add('dark-mode');
    heroSection.classList.add('dark-bg');
    themeButton.textContent = 'Dark Mode';
    themeButton.style.color = '#fff'; // Set text color to white for dark mode
  }
}

// Example event listener for the theme toggle button
var themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleTheme);

function toggleheme() {
  var body = document.body;
  var heroSection = document.querySelector('.hero');
  var heroHeading = document.querySelector('.hero h1');
  var heroParagraph = document.querySelector('.hero p');
  var themeButton = document.getElementById('theme-toggle');

  if (body.classList.contains('dark-mode')) {
    // Switch to light mode

  heroHeading.style.color = '#fff'; // Change heading color to white
    heroParagraph.style.color = '#fff'; // Change paragraph color to white
  } else {
    // Switch to dark mode

    
    heroHeading.style.color = '#333'; // Change heading color back to default
    heroParagraph.style.color = '#666'; // Change paragraph color back to default
    
  }
}

themeToggle.addEventListener('click', toggleheme);
