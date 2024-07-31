const grid = document.querySelector('.grid');

const btn = document.getElementById('btn');


// create grid of divs within container
for (let i = 1; i <= 20; i++) {
  for (let j = 1; j <= 20; j++) {
    // create pixel and assign class name
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    grid.appendChild(pixel)
  }
}

const tiles = Array.from(document.querySelectorAll('.pixel'));

for (const tile of tiles) {
  tile.addEventListener('mouseover', e => {
    tile.style.backgroundColor = "black";
  });
}