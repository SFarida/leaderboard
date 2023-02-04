/* eslint-disable import/extensions */
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gameScores, getScores, postScores } from './modules/service.js';
import { getGameId, getGames } from './modules/storage';
import { loadScores } from './modules/renderScores';

let allScores = getGames();
const gameId = getGameId();

document.getElementById('refresh').addEventListener('click', async () => {
  allScores = await getScores(gameId);
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const scoreObj = {
    user: document.getElementById('name').value,
    score: document.getElementById('score').value,
  };
  postScores(gameId, scoreObj);
});

window.onload = async () => {
  await gameScores();
  loadScores(allScores);
};