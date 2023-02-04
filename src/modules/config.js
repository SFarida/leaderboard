export const endPoints = (gameId = null) => {
    return {
        "game": "/games/",
        "scores": `/games/${gameId}/scores/`
    }
}