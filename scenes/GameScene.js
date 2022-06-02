const player = 'player';
class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    preload() {
        this.load.spritesheet( player, 'assets/images/player.png', {frameWidth: 48, frameHeight: 38, endFrame: -1});
        this.load.json('shapes', 'assets/images/idle.json');

    }

    create() {
        this.createPlayer();
        this.createAnimations();

    }

    createAnimations() {

    }

    createPlayer() {
        this.player = this.matter.add.sprite( 200, 200, player);
        this.player.setScale(2);
        this.player.setFrame(28);
        this.player.setCircle(30);
    }

    update() {
    }
}