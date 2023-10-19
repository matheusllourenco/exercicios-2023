const textoResumido = document.getElementById('texto-resumo') as HTMLParagraphElement;
const textoCompleto = document.getElementById('texto-completo') as HTMLParagraphElement;
const botaoVerMais = document.getElementById('botao-ver-mais') as HTMLButtonElement;


botaoVerMais.addEventListener('click', () => {
  if (textoCompleto.style.display === 'none') {
    textoCompleto.style.display = 'block';
    botaoVerMais.textContent = 'Ver Menos';
  } else {
    textoCompleto.style.display = 'none';
    botaoVerMais.textContent = 'Ver Mais';
  }
});
