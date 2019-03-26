export default class Pants extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.setSize(18, 15);
        this.body.drag.x = 1500;
        this.body.drag.y = 1500;
    }

    update() {
        if (this.alpha > 0 && this.body.velocity.x === 0 && this.body.velocity.y === 0) {
            this.scene.physics.world.overlap(this, this.scene.baby, this.collected);
        }
    }

    collected(pants, baby) {
        baby.hasPants = true;
        baby.updateFrame();
        pants.alpha = 0;
    }
}
