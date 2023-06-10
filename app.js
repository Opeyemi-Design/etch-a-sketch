const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
  const div = document.createElement('div');
  div.classList.add('boxes');

  div.addEventListener('mouseenter', () => {
    div.classList.add('hovered');
  });

  container.appendChild(div);
}


