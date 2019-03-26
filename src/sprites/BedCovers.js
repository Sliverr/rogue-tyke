export default class BedCovers extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.anims.play('bed-covers');
    }

    update() {
        if (!this.scene) return;
    }
}
