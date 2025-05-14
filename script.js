// 1. Event Handling
document.getElementById('clickMe').addEventListener('click', () => {
  alert("Button clicked!");
});

document.getElementById('clickMe').addEventListener('dblclick', () => {
  document.body.style.backgroundColor = '#fdf6e3';
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.style.backgroundColor = 'lightblue';
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = 'lightgray';
});

document.addEventListener('keydown', (e) => {
  console.log(`You pressed ${e.key}`);
});

// 2. Interactive Elements
document.getElementById('changeTextBtn').addEventListener('click', function () {
  this.textContent = "Changed!";
  this.style.backgroundColor = "green";
});

const images = [
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200/ff7f7f",
  "https://via.placeholder.com/200/87cefa"
];
let index = 0;
document.getElementById('nextImage').addEventListener('click', () => {
  index = (index + 1) % images.length;
  document.getElementById('galleryImage').src = images[index];
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(tab.dataset.target).style.display = 'block';
  });
});

// 3. Form Validation
const form = document.getElementById('signupForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('feedback');

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passValid = password.length >= 8;

  if (!emailValid) {
    feedback.textContent = "Invalid email format.";
  } else if (!passValid) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "Form submitted successfully!";
  }
});

document.getElementById('password').addEventListener('input', function () {
  this.style.borderColor = this.value.length >= 8 ? 'green' : 'red';
});
