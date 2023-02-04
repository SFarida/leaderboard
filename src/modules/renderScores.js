export const loadScores = (scores) => {
    const container = document.getElementById('scoreList')
    container.replaceChildren();
    scores.forEach(element => {
        const list = `<li class="list-group-item">${element.user}: ${element.score}</li>`
        container.insertAdjacentHTML('beforeend', list);
    });
}
