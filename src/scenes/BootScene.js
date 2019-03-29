import makeAnimations from '../helpers/animations';

class BootScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        });
    }
    preload() {
        const progress = this.add.graphics();

        // Register a load progress event to show a load bar
        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
        });

        // Register a load complete event to launch the title screen when all files are loaded
        this.load.on('complete', () => {
            // prepare all animations, defined in a separate file
            makeAnimations(this);
            progress.destroy();
            this.scene.start('GameScene');
        });

        this.load.spritesheet('baby', 'assets/images/baby.png', {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.image('pants', 'assets/images/pants.png');
        this.load.spritesheet('bed', 'assets/images/bed.png', {
            frameWidth: 32,
            frameHeight: 48
        });
        this.load.image('rug', 'assets/images/rug.png');
        this.load.image('nightstand', 'assets/images/nightstand.png');
        this.load.image('painting', 'assets/images/painting.png');
    }
}

export default BootScene;
