const WIDTH = 720;
const HEIGHT = 720;
const TURN_SPEED = 180;
const MAX_PLAYERS = 4;
const PLAYER_OFFSET = 50;

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
var players = [];

function preload ()
{
    this.load.setBaseURL('http://localhost:8000/');

    this.load.image('bg', 'assets/img/background.jpg');
    this.load.image('brick_1', 'assets/img/brick_01.png');
    this.load.image('player_1', 'assets/img/Player1.png');
    this.load.image('player_2', 'assets/img/Player2.png');
    this.load.image('player_3', 'assets/img/Player3.png');
    this.load.image('player_4', 'assets/img/Player4.png');

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
    var player_x = [PLAYER_OFFSET, WIDTH - PLAYER_OFFSET, WIDTH - PLAYER_OFFSET, PLAYER_OFFSET];
    var player_y = [HEIGHT - PLAYER_OFFSET, PLAYER_OFFSET, HEIGHT - PLAYER_OFFSET, PLAYER_OFFSET];
    var player_rot = [45, 225, 315, 135];

    for (let i = 0; i < MAX_PLAYERS; i++)
    {
        let player = this.physics.add.image(player_x[i], player_y[i], 'player_' + (i + 1)).setOrigin(0.5, 1);
        player.setAngle(player_rot[i]);
        player.setScale(0.2);
        players.push(player);
    }

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
    let player1 = players[0];
    if (cursors.left.isDown)
    {
        player1.setAngularVelocity(-TURN_SPEED);
    }
    else if (cursors.right.isDown)
    {
        player1.setAngularVelocity(TURN_SPEED);
    }
    else
    {
        player1.setAngularVelocity(0);
    }

    if (player1.angle > 10)
    {

    }
}
