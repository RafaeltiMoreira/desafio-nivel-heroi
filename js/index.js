function classificarHeroi() {
  const nome = document.getElementById('nome').value.trim();
  const xp = parseInt(document.getElementById('xp').value);
  const mensagem = document.getElementById('mensagem');
  const erro = document.getElementById('erro');

  mensagem.textContent = '';
  erro.textContent = '';

  if (!nome || isNaN(xp) || xp < 0) {
    erro.textContent = 'Por favor, preencha o nome e o XP (informe um número).';
    return;
  }

  let nivel = '';

  if (xp < 1000) nivel = 'Ferro';
  else if (xp <= 2000) nivel = 'Bronze';
  else if (xp <= 5000) nivel = 'Prata';
  else if (xp <= 7000) nivel = 'Ouro';
  else if (xp <= 8000) nivel = 'Platina';
  else if (xp <= 9000) nivel = 'Ascendente';
  else if (xp <= 10000) nivel = 'Imortal';
  else nivel = 'Radiante';

  mensagem.textContent = `O Herói de nome ${nome} está no nível de ${nivel}.`;

  document.getElementById('nome').value = '';
  document.getElementById('xp').value = '';
}