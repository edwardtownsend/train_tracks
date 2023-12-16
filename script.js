document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
    let selectedTrack = null; 
  
    // Create the 8x8 grid
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const gridItem = document.createElement('div');

        if(i === 0 && j === 8){
        } else if(i === 0){
            gridItem.dataset.number = Math.round(Math.random() * 8);
            gridItem.classList.add('top-edge');
        } else if(j === 8){
            gridItem.dataset.number = Math.round(Math.random() * 8);
            gridItem.classList.add('right-edge');
        } else{
            gridItem.classList.add('grid-item');
        }
        gridContainer.appendChild(gridItem);

        if ((i === 0 || j === 8) && !(i === 0 && j === 8)) {
            gridItem.addEventListener('click', function() {
                const newNumber = prompt('Enter a number:');
                if (newNumber !== null && newNumber >= 0 && newNumber <= 8) {
                    gridItem.dataset.number = newNumber;
                }
                else {
                    alert('Please enter a number between 0 and 8.');
                }
            });
        }
        
        gridItem.addEventListener('click', function() {
            if(selectedTrack != null){
                gridItem.id = selectedTrack;
            }
            else {
                alert('Please select a track element.');
            }
        });
      }
    }

    const trackElements = document.querySelectorAll('.track-element');

    trackElements.forEach(trackElement => {
        trackElement.addEventListener('click', () => {
            trackElements.forEach(element => {
                element.classList.remove('highlight-border');
            });
            trackElement.classList.add('highlight-border');
            selectedTrack = trackElement.id;
        });
    });
});
