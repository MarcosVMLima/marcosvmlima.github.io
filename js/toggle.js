jQuery.noConflict();

jQuery(function($) {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 150) {
          $(".navbar").addClass("scroll");
      } else {
         $(".navbar").removeClass("scroll");
      }
  });
});

const toggleButton = document.getElementById('theme-toggle');

// 1. Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// 2. Toggle theme and save choice on button click
toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // Save preference
});