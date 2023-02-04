export const getGames = () => {
    const data = JSON.parse(localStorage.getItem('games')) || [];
    return data;
};
export const getGameId = () => {
    const data = JSON.parse(localStorage.getItem('gameId')) || null;
    return data;
};

export const storeId = (data) => {
    if (getGameId() === null) {
        localStorage.setItem('gameId', JSON.stringify(data));
    }
};
export const storeGame = (data) => {
    localStorage.setItem('games', JSON.stringify(data));
};