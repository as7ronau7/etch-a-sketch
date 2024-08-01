const grid = document.querySelector('.grid');
const btn = document.getElementById('btn');
let gridSize = 16;

function defaultGrid(size) {
  // create grid of divs within container
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      // create pixel and assign class name
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      grid.appendChild(pixel)
      pixel.style.width += `calc(960px / ${size})`;
      pixel.style.height += `calc(960px / ${size})`;
    }
  }
  // calls the colorGrid() to change pixel color
  colorGrid();
}

function resizeGrid(size = 16) {
  // if grid has child elements then remove them
  if (grid.hasChildNodes()) {
    grid.innerHTML = '';
  }

  // create grid of divs within container
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      // create pixel and assign class name
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      grid.appendChild(pixel)
      pixel.style.width += `calc(960px / ${size})`;
      pixel.style.height += `calc(960px / ${size})`;
    }
  }
  // calls the colorGrid() to change pixel color
  colorGrid();

}

function colorGrid() {
  // Array.from turns a HTMLCollection into an array that you can then loop through
  const tiles = Array.from(document.querySelectorAll('.pixel'));
  for (const tile of tiles) {
    tile.addEventListener('mouseover', () => {
      tile.style.backgroundColor += "black";
    });
  }
}

// Resize Grid Button Event Listener
btn.addEventListener('click', () => {
  const ask = Number.parseInt(prompt("Enter the grid size you would like: "))
  ask > 100 || ask < 0 ? alert('Please enter a number between 0 and 100') : ask;
  resizeGrid(ask);
})
// sets the default grid on the screen
defaultGrid(gridSize);