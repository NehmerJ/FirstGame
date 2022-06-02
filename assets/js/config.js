var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0},
            debug: true,
            setBounds: {
                left: true,
                right: true,
                up: true,
                down: true
            }
        }
    },

    scene: [
        GameScene,
    ],
    pixelArt: true,
    roundPixels: true,
};

var game = new Phaser.Game(config);