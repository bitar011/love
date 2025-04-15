function revelarSurpresa() {
    document.getElementById("segredo").style.display = "block";
  }

  // Criar corações flutuando
  const heartsContainer = document.getElementById('hearts-container');
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = 100 + Math.random() * 20 + 'vh';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }
  setInterval(createHeart, 300);