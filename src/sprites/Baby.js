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
        this.moving = false;
        this.anims.play('down');
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

        let moving = input.up || input.down || input.left || input.right;
        let facing = this.facing;

        if (input.left) {
            this.body.acceleration.x = -this.moveSpeed;
            facing = 'left';
        } else if (input.right) {
            this.body.acceleration.x = this.moveSpeed;
            facing = 'right';
        } else {
            this.body.acceleration.x = 0;
        }

        if (input.up) {
            this.body.acceleration.y = -this.moveSpeed;
            facing = 'up';
        } else if (input.down) {
            this.body.acceleration.y = this.moveSpeed;
            facing = 'down';
        } else {
            this.body.acceleration.y = 0;
        }

        let threwPants = false;
        if (input.space && this.hasPants) {
            threwPants = true;
            this.hasPants = false;
            let velocity = {
                x: 0, y: 0
            };
            if (facing === 'right') {
                velocity.x = 400;
            } else if (facing === 'left') {
                velocity.x = -400;
            } else if (facing === 'up') {
                velocity.y = -400;
            } else if (facing === 'down') {
                velocity.y = 400;
            }
            this.scene.throwPants(velocity);
        }

        if (moving !== this.moving || facing !== this.facing || threwPants) {
            this.moving = moving;
            this.facing = facing;
            this.updateFrame();
        }
    }

    updateFrame() {
        if (this.hasPants) {
            this.clothingSuffix = '-pants';
        } else {
            this.clothingSuffix = '';
        }
        if (this.moving) {
            this.moveSuffix = '-walk';
        } else {
            this.moveSuffix = '';
        }
        let newAnim = this.facing + this.clothingSuffix + this.moveSuffix;
        console.log(newAnim);
        if (this.anims.currentAnim.key !== newAnim) {
            this.anims.play(newAnim);
        }
    }
}
