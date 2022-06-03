const player = 'player';
const velocity = 5;
class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    preload() {
        this.load.spritesheet( player, 'assets/images/player.png', {frameWidth: 48, frameHeight: 38, endFrame: 100});
        this.load.image('background', 'assets/level/main_lev_buildA.png');
        // map made with Tiled in JSON format
        this.load.tilemapTiledJSON('map', 'assets/level/small-level.json');

    }

    create() {
        this.createMap();
        this.createPlayer();
        this.createAnimations();

    }

    createAnimations() {

        //create the running animation
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(player, {frames: [42, 43, 44, 45, 46, 47]}),
            frameRate: 10,
            repeat: -1
        });
        
        //creating the idle frame for when player is not moving
        this.anims.create({
            key: 'idle',
            frames: [{key: player, frame: 29}],
            frameRate: 20
        });


    }

    createPlayer() {
        this.player = this.matter.add.sprite( 200, 200, player);
        //scaling player size up by 2
        this.player.setScale(2);
        // this.player.setCircle(30);
        // this.player.setSize(100, 30);
        this.keys = this.input.keyboard.addKeys("W, A, S, D");

        this.player.setFixedRotation();
        this.player.setFrictionAir(0);


    }

    createMap() {
        //create the tile map
        this.map = this.make.tilemap({key: 'map'});
        //add the tileset image to our map
        this.tiles = this.map.addTilesetImage('tileset', 'background', 16, 16, 0, 0);
        //create our background
        this.backgroundLayer = this.map.createLayer('bgLayer', this.tiles, 0, 0);
        this.backgroundLayer.setScale(2);
        //create blocked layer
        this.blockedLayer = this.map.createLayer('blocked', this.tiles, 0, 0);
        this.blockedLayer.setScale(2);
    }

    update() {
        if(this.keys.A.isDown) {
            this.player.setVelocityX(-velocity)
            this.player.anims.play('right', true);
            this.player.flipX = true;
        } else if (this.keys.D.isDown) {
            this.player.setVelocityX(velocity);
            this.player.anims.play('right', true);
            this.player.flipX = false;
        } else {
            this.player.setVelocity(0);
            this.player.anims.play('idle', true);
        }
    }
}