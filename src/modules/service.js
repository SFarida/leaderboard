/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { endPoints } from './config.js';
import {
  getGameId, storeId, storeGame, getGames,
} from './storage.js';
import { loadScores } from './renderScores.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

export const gameScores = () => {
  const data = {
    name: 'Martial art',
  };
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    method: 'POST',
  };
  return fetch(baseUrl + endPoints().game, options)
    .then(
      (data) => data.json(),
    ).then(
      (response) => {
        // Getting the scores of the game
        const id = response.result.split(' ')[3];
        storeId(id);
      },
    )
    .catch(
      (error) => null,
    );
};

export const getScores = (gameId) => {
  fetch(baseUrl + endPoints(gameId).scores)
    .then(
      (response) => response.json(),
    ).then(
      (response) => {
        storeGame(response.result);
        loadScores(getGames());
      },
    )
    .catch(
      (error) => null,
    );
};

export const postScores = (gameId, scoreObj) => {
  const scoreOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreObj),
    method: 'POST',
  };
  fetch(baseUrl + endPoints(gameId).scores, scoreOptions)
    .then(
      (response) => response.json(),
    )
    .then(
      (response) => {
        getScores(getGameId());
        document.getElementById('form').reset();
      },
    )
    .catch(
      (error) => null,
    );
};