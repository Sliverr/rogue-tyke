export default class Baby extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.body.maxVelocity.x = 150;
        this.body.maxVelocity.y = 150;
        this.body.drag.x = 800;
        this.body.drag.y = 800;
        this.moveSpeed = 800;
        this.body.setSize(14, 22);
        this.facing = 'down';
        this.hasPants = false;
        this.updateFrame();
    }

    update(keys, time, delta) {
        let input = {
            left: keys.left.isDown || keys.a.isDown,
            right: keys.right.isDown || keys.d.isDown,
            down: keys.down.isDown || keys.s.isDown,
            up: keys.up.isDown || keys.w.isDown,
            space: keys.space.isDown
        };

        if (input.left) {
            this.body.acceleration.x = -this.moveSpeed;
            this.facing = 'left';
            this.updateFrame();
        } else if (input.right) {
            this.body.acceleration.x = this.moveSpeed;
            this.facing = 'right';
            this.updateFrame();
        } else {
            this.body.acceleration.x = 0;
        }

        if (input.up) {
            this.body.acceleration.y = -this.moveSpeed;
            this.facing = 'up';
            this.updateFrame();
        } else if (input.down) {
            this.body.acceleration.y = this.moveSpeed;
            this.facing = 'down';
            this.updateFrame();
        } else {
            this.body.acceleration.y = 0;
        }
        if (input.space && this.hasPants) {
            this.hasPants = false;
            let velocity = {
                x: 0, y: 0
            };
            if (this.facing === 'right') {
                velocity.x = 400;
            } else if (this.facing === 'left') {
                velocity.x = -400;
            } else if (this.facing === 'up') {
                velocity.y = -400;
            } else if (this.facing === 'down') {
                velocity.y = 400;
            }
            this.scene.throwPants(velocity);
            this.updateFrame();
        }
    }

    updateFrame() {
        if (this.hasPants) {
            this.animSuffix = '-pants';
        } else {
            this.animSuffix = '';
        }
        this.anims.play(this.facing + this.animSuffix);
    }
}
