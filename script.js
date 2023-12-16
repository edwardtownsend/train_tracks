document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
  
    // Create the 8x8 grid
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const gridItem = document.createElement('div');
        
        if(i === 0){
            gridItem.dataset.number = Math.round(Math.random() * 8);
            gridItem.classList.add('top-grid-item');
        } else if(j === 7){
            gridItem.dataset.number = Math.round(Math.random() * 8);
            gridItem.classList.add('bot-grid-item');
        } else{
            gridItem.classList.add('grid-item');
        }
        gridContainer.appendChild(gridItem);

        if(i === 0 || j === 7){
            gridItem.addEventListener('click', function() {
                const newNumber = prompt('Enter a number:');
                if (newNumber !== null) {
                gridItem.dataset.number = newNumber;
                } 
            });
        }
      }
    }
  });
  