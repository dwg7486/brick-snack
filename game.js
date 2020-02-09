const WIDTH = 720;
const HEIGHT = 720;
const TURN_SPEED = 180;
const MAX_PLAYERS = 4;
const PLAYER_OFFSET = 50;

class Player {
    #turnRange = 120;
    constructor(game, number, x, y, initAngle, updateFn = ()=>{})
    {
        this.number = number;
        this.update = update;
        this.initAngle = initAngle;

        this.image = game.physics.add.image(x, y, 'player_' + (number + 1));

        this.image.setOrigin(0.5, 1);
        this.image.setAngle(initAngle);
        this.image.setScale(0.2);

        this.updateFn = updateFn;

        this.score = 0;
    }

    doUpdate()
    {
        this.updateFn(this);
    }
}

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
    this.load.image('brick_1', 'assets/img/brick_01.png');
    this.load.image('player_1', 'assets/img/Player1.png');
    this.load.image('player_2', 'assets/img/Player2.png');
    this.load.image('player_3', 'assets/img/Player3.png');
    this.load.image('player_4', 'assets/img/Player4.png');

}

function create ()
{
    this.add.image(WIDTH/2, HEIGHT/2, 'bg');

    cursors = this.input.keyboard.createCursorKeys();

    var player_x = [PLAYER_OFFSET, WIDTH - PLAYER_OFFSET, WIDTH - PLAYER_OFFSET, PLAYER_OFFSET];
    var player_y = [HEIGHT - PLAYER_OFFSET, PLAYER_OFFSET, HEIGHT - PLAYER_OFFSET, PLAYER_OFFSET];
    var player_rot = [45, 225, 315, 135];

    let updateFn = function(player)
    {
        if (cursors.left.isDown)
        {
            player.image.setAngularVelocity(-TURN_SPEED);
        }
        else if (cursors.right.isDown)
        {
            player.image.setAngularVelocity(TURN_SPEED);
        }
        else
        {
            player.image.setAngularVelocity(0);
        }

        // todo: check for turning boundaries
    }

    var pNum = 1;
    player = new Player(this, pNum, player_x[pNum], player_y[pNum], player_rot[pNum], updateFn);


    var crates = this.physics.add.group({
        key: 'brick_1',
        quantity: 24,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        velocityX: 300,
        velocityY: 150,
    });

}

function update()
{
    player.doUpdate()
}
