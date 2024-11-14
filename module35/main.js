// Function to create and show a circle with a timer
function createCircle() {
    const circle = document.createElement('div'); // Create a new div for the circle
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.backgroundColor = 'red';
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.cursor = 'pointer';
    circle.style.display = 'flex';
    circle.style.alignItems = 'center';
    circle.style.justifyContent = 'center';
    circle.style.fontSize = '14px';
    circle.style.color = 'white';
  
    // Set random position on the screen
    const x = Math.random() * (window.innerWidth - 50); // Subtract 50 to avoid overflow
    const y = Math.random() * (window.innerHeight - 50);
  
    // Position the circle at the random coordinates
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  
    let timeRemaining = 1; // Start the timer at 1 second
    const timerText = document.createElement('span'); // Create an element for the timer
    timerText.textContent = timeRemaining; // Show the timer on the circle
    circle.appendChild(timerText); // Add the timer text inside the circle
  
    // Function to update the timer and hide the circle if the time runs out
    const timerInterval = setInterval(function() {
      timeRemaining -= 0.1; // Decrease the timer every 100ms
      timerText.textContent = timeRemaining.toFixed(1); // Update the displayed timer
  
      if (timeRemaining <= 0) {
        // Time is up, hide the circle if not clicked
        clearInterval(timerInterval);
        circle.style.display = 'none';
      }
    }, 100);
  
    // When the circle is clicked, remove it immediately
    circle.addEventListener('click', function() {
      clearInterval(timerInterval); // Stop the timer
      circle.style.display = 'none'; // Hide the circle
    });
  
    // Append the circle to the body
    document.body.appendChild(circle);
  }
  
  // Create the first circle immediately
  createCircle();

  