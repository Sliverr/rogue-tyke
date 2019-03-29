export default function makeAnimations(scene) {
    // Baby
    scene.anims.create({
        key: 'down',
        frames: [{
            key: 'baby',
            frame: 0
        }]
    });
    scene.anims.create({
        key: 'up',
        frames: [{
            key: 'baby',
            frame: 1
        }]
    });
    scene.anims.create({
        key: 'left',
        frames: [{
            key: 'baby',
            frame: 4
        }]
    });
    scene.anims.create({
        key: 'right',
        frames: [{
            key: 'baby',
            frame: 5
        }]
    });
    scene.anims.create({
        key: 'down-pants',
        frames: [{
            key: 'baby',
            frame: 2
        }]
    });
    scene.anims.create({
        key: 'up-pants',
        frames: [{
            key: 'baby',
            frame: 3
        }]
    });
    scene.anims.create({
        key: 'left-pants',
        frames: [{
            key: 'baby',
            frame: 6
        }]
    });
    scene.anims.create({
        key: 'right-pants',
        frames: [{
            key: 'baby',
            frame: 7
        }]
    });
    scene.anims.create({
        key: 'down-walk',
        frames: scene.anims.generateFrameNumbers('baby', {
            start: 8, end: 9
        }),
        frameRate: 8,
        repeat: -1
    });
    scene.anims.create({
        key: 'up-walk',
        frames: scene.anims.generateFrameNumbers('baby', {
            start: 10, end: 11
        }),
        frameRate: 8,
        repeat: -1
    });
    scene.anims.create({
        key: 'left-walk',
        frames: scene.anims.generateFrameNumbers('baby', {
            start: 12, end: 13
        }),
        frameRate: 8,
        repeat: -1
    });
    scene.anims.create({
        key: 'right-walk',
        frames: scene.anims.generateFrameNumbers('baby', {
            start: 14, end: 15
        }),
        frameRate: 8,
        repeat: -1
    });

    // Bed
    scene.anims.create({
        key: 'bed',
        frames: [{
            key: 'bed',
            frame: 0
        }]
    });
    scene.anims.create({
        key: 'bed-covers',
        frames: [{
            key: 'bed',
            frame: 1
        }]
    });
}
