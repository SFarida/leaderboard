export const endPoints = (gameId = null) => ({
  game: '/games/',
  scores: `/games/${gameId}/scores/`,
});

export { endPoints as default };
