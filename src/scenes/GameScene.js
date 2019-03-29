import Baby from '../sprites/Baby';
import Pants from '../sprites/Pants';
import Bed from '../sprites/Bed';
import BedCovers from '../sprites/BedCovers';
import StaticProp from '../sprites/StaticProp';

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.cameras.main.setBackgroundColor('#293030');
        this.cameras.main.roundPixels = true;
    }

    create() {
        this.add.text(4, 2, 'WASD or arrows to move', {
            fill: '#1a2'
        });
        this.add.text(4, 16, 'Space to throw pants', {
            fill: '#182'
        });
        this.pants = new Pants({
            scene: this,
            key: 'pants',
            x: 32 * 5,
            y: 32 * 4
        });
        this.staticProps = [
            new Bed({
                scene: this,
                key: 'bed',
                x: 32 * 7,
                y: 32 * 3
            }),
            new BedCovers({
                scene: this,
                key: 'bed',
                x: 32 * 7,
                y: 32 * 3
            }),
            new StaticProp({
                scene: this,
                key: 'painting',
                x: 32 * 3,
                y: 32 * 2
            }),
            new StaticProp({
                scene: this,
                key: 'rug',
                x: 32 * 4,
                y: 32 * 3.5
            }),
            new StaticProp({
                scene: this,
                key: 'nightstand',
                x: 32 * 6.25,
                y: 32 * 2.75
            })
        ];
        this.baby = new Baby({
            scene: this,
            key: 'baby',
            x: 32 * 2,
            y: 32 * 4
        });

        this.keys = {
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            w: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        };
    }

    update(time, delta) {
        this.baby.update(this.keys, time, delta);
        this.pants.update();
    }

    throwPants(velocity) {
        this.pants.alpha = 1;
        this.pants.x = this.baby.x;
        this.pants.y = this.baby.y;
        this.pants.body.velocity.x = velocity.x;
        this.pants.body.velocity.y = velocity.y;
    }
}

export default GameScene;
