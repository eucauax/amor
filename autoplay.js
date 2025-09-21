
// Força autoplay da música
window.addEventListener('load', () => {
  const audio = document.getElementById('player');

  // tenta tocar automaticamente
  audio.play().catch(() => {
    // se o navegador bloquear, toca no primeiro clique do usuário
    document.body.addEventListener('click', () => {
      audio.play();
    }, { once: true });
  });
});
