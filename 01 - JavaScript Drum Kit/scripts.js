function playSound(e) {
    // Add keycodes to variables
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    // Play audio
    if(!audio) return; // Stops the function
    audio.currentTime = 0;
    audio.play();

    // Add animation
    key.classList.add('playing');
  };

// Remove the added CSS from the div
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // Skip if not transform
  this.classList.remove('playing');
};

// Wait for the transition end and return the div to the original state
const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));

// Get the event of key being pressed and play the correct sound
window.addEventListener('keydown', playSound);
