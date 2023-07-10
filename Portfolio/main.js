const container = document.querySelector('.parallax-container');
const desk = document.querySelector('.desk');
const computer = document.querySelector('.computer');

container.addEventListener('mousemove', function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Adjust the position of the elements based on mouse movement
  desk.style.transform = `translate(calc(-50% + ${mouseX * 0.02}px), calc(-50% + ${mouseY * 0.02}px))`;
  computer.style.transform = `translate(calc(-50% + ${mouseX * 0.05}px), calc(-50% + ${mouseY * 0.05}px))`;
});

