function startGame() {
    const gameArea = document.getElementById('gameArea');
    const player = document.createElement('div');
    player.style.width = '50px';
    player.style.height = '50px';
    player.style.backgroundColor = 'blue';
    player.style.position = 'absolute';
    player.style.top = '175px';
    player.style.left = '275px';
    
    gameArea.appendChild(player);
    
    // Basic movement
    window.addEventListener('keydown', (e) => {
        const step = 10;
        let top = parseInt(player.style.top);
        let left = parseInt(player.style.left);
        
        if (e.key === 'ArrowUp') player.style.top = (top - step) + 'px';
        if (e.key === 'ArrowDown') player.style.top = (top + step) + 'px';
        if (e.key === 'ArrowLeft') player.style.left = (left - step) + 'px';
        if (e.key === 'ArrowRight') player.style.left = (left + step) + 'px';
    });
}
