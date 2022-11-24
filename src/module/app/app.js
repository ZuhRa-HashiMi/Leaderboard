import * as api from '../game/game.js';

const addToLeaderboard = (data) => {
    const formtxt = document.querySelector('form > p');
    api.setData(data.user, data.score).then((recieved) => {
      formtxt.innerHTML = recieved.result;
      formtxt.style.color = '#fff';
    });
  };