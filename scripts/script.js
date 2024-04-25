const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = ":-)";
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";


  // Create a button element
  var button = document.createElement('button');
  // Set any attributes or properties for the button, such as text content
  button.textContent = 'back';

  // Apply styling to the button
  button.style.position = 'absolute';
  button.style.width = '150px';
  button.style.height = 'inherit';
  button.style.color = 'white';
  button.style.fontSize = '1.2em';
  button.style.borderRadius = '30px';
  button.style.outline = 'none';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 2px 4px gray';
  button.style.border = '2px solid #e94d58';
  button.style.marginLeft = '-200px';
  button.style.background = '#e94d58';
  button.style.marginTop = '500px'; /* Add margin to top */


  // Add event listener to handle button click
  button.addEventListener('click', function(event) {
  // Prevent the default action (following the link or submitting a form)
  event.preventDefault();
  // Navigate to the specified URL
  window.location.href = 'g1.html';
});

// Append the button to the document body or any other parent element
document.body.appendChild(button);

// Create a button element
var button2 = document.createElement('button');
// Set any attributes or properties for the button, such as text content
button2.textContent = 'next';

button2.style.position = 'absolute';
button2.style.width = '150px';
button2.style.height = 'inherit';
button2.style.color = 'white';
button2.style.fontSize = '1.2em';
button2.style.borderRadius = '30px';
button2.style.outline = 'none';
button2.style.cursor = 'pointer';
button2.style.boxShadow = '0 2px 4px gray';
button2.style.border = '2px solid #e94d58';
button2.style.marginRight = '-200px';
button2.style.background = '#e94d58';
button2.style.marginTop = '500px'; /* Add margin to top */
document.body.appendChild(button2);



// Add event listener to handle button click
button2.addEventListener('click', function(event) {
// Prevent the default action (following the link or submitting a form)
event.preventDefault();
// Navigate to the specified URL
window.location.href = 'pageTwo.html';
});

// Append the button to the document body or any other parent element
document.body.appendChild(button2);
  
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});