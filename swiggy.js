function other()
{
  var slideDiv = document.getElementById('slideDiv')
  slideDiv.classList.toggle('hidden'); // Toggle display property
    setTimeout(function() {
        slideDiv.classList.toggle('other'); // Trigger the slide-in animation
    }, 10); // Slight delay to allow display change to take effect
}