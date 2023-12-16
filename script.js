document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
  
    // Create the 8x8 grid
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const gridItem = document.createElement('div');
        const randnum = Math.round(Math.random() * 8);
        gridItem.classList.add('grid-item');
        gridItem.dataset.number = randnum;
        gridContainer.appendChild(gridItem);
  
        // Add input event for user input
        gridItem.addEventListener('click', function() {
          const newNumber = prompt('Enter a number:');
          if (newNumber !== null) {
            gridItem.dataset.number = newNumber;
          }
        });
      }
    }
  });
  