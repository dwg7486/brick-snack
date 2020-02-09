const WIDTH = 720;
const HEIGHT = 720;
const TURN_SPEED = 180;

var config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);
var cursors;
var player;

function preload ()
{
    this.load.setBaseURL('http://localhost:8000/');

    this.load.image('bg', 'assets/img/background.jpg');
    this.load.image('brick_01', 'assets/img/brick_01.png');
    this.load.image('player', 'assets/img/Player1.png');

}

function create ()
{

    this.add.image(WIDTH/2, HEIGHT/2, 'bg');


    //var particles = this.add.particles('brick_01');

    /*
    var emitter = particles.createEmitter({
        speed: 10,
        maxParticles: 5,
        scale: 0.4 //{ start: 0.2, end: 0 },
        //blendMode: 'ADD'
    });
    */

    player = this.physics.add.image(50, HEIGHT - 50, 'player').setOrigin(0.5, 1);
    player.setRotation(0.785);
    player.setScale(0.2);

    //.setVelocity(100, 200);
    //.setBounce(1, 1);
    //.setCollideWorldBounds(true);

    //emitter.startFollow(logo);
    cursors = this.input.keyboard.createCursorKeys();

    var crates = this.physics.add.group({
        key: 'brick_01',
        quantity: 24,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        velocityX: 300,
        velocityY: 150,
    });

}

function update ()
{
    if (cursors.left.isDown)
    {
        player.setAngularVelocity(-TURN_SPEED);
    }
    else if (cursors.right.isDown)
    {
        player.setAngularVelocity(TURN_SPEED);
    }
    else
    {
        player.setAngularVelocity(0);
    }
}
