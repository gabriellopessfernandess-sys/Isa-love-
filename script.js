function openLetter() {
  const env = document.querySelector('.envelope');
  env.classList.add('open');

  setTimeout(() => {
    document.getElementById('intro').classList.remove('active');
    document.getElementById('letterScreen').classList.add('active');
  }, 1200);
}

function goMusic() {
  document.getElementById('letterScreen').classList.remove('active');
  document.getElementById('music').classList.add('active');
}
