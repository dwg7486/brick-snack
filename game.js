const WIDTH = 720;
const HEIGHT = 720;

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
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('http://localhost:8000/');

    this.load.image('bg', 'assets/img/background.jpg');
    this.load.image('brick_01', 'assets/img/brick_01.jpg');
    this.load.image('player', 'assets/img/player.jpg');
}

function create ()
{
    this.add.image(WIDTH/2, HEIGHT/2, 'bg');

    var particles = this.add.particles('brick_01');

    /*
    var emitter = particles.createEmitter({
        speed: 10,
        maxParticles: 5,
        scale: 0.4 //{ start: 0.2, end: 0 },
        //blendMode: 'ADD'
    });
    */

    var player = this.physics.add.image(50, HEIGHT - 50, 'player');
    player.setRotation(0.785);

    //.setVelocity(100, 200);
    //.setBounce(1, 1);
    //.setCollideWorldBounds(true);

    //emitter.startFollow(logo);
}
