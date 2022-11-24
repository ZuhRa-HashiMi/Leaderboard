const name = document.getElementById('name');
const score = document.getElementById('score');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    util.addToLeaderboard({ user: name.value, score: score.value });
    score.value = '';
    name.value = '';
  });
  