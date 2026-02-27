


class Player {
    constructor () {
        this.width = 20;
        this.height =  20;
        this.positionX = 40;
        this.positionY = 0;
        this.updateUI();
    }

    updateUI () {
        const playerElm = document.getElementById("player");
        playerElm.style.left = this.positionX + "vw";
        playerElm.style.bottom = this.positionY + "vh";
        playerElm.style.width = this.width + "vw";
        playerElm.style.height = this.height + "vh";
    }

    moveLeft () {
        if (this.positionX > 0) {
            this.positionX -= 1;
            this.updateUI();
        }
    }

    moveRight () {
        if (this.positionX < 100 - this.width) {
            this.positionX += 1;
            this.updateUI();
        }
    }

    isCollidingWith (other) {
        if (
            this.positionX < other.positionX + other.width &&
            this.positionX + this.width > other.positionX &&
            this.positionY < other.positionY + other.height &&
            this.positionY + this.height > other.positionY
        ) {
            console.log("collision detected");
            return true;
        }

        return false;
    }
}

class Obstacle {
    constructor () {
        this.width = 20; 
        this.height = 20;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 100;
        this.obstacleElm = null;

        this.createDomElement();
    }

    createDomElement () {
        this.obstacleElm = document.createElement("div");
        this.obstacleElm.className = "obstacle";

        const parentElement = document.getElementById("board");
        
        parentElement.appendChild(this.obstacleElm);
    }

    updateUI () {
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vh";
        this.obstacleElm.style.width = this.width + "vw";
        this.obstacleElm.style.height = this.height + "vh";
    }

    moveDown () {
        this.positionY -= 1;

        this.updateUI();
    }
}

const player = new Player();

const obstacle1 = new Obstacle();

// generate new obstacles

const obstacleArray = [];

setInterval(() => {
    const newObstacle = new Obstacle;
    obstacleArray.push(newObstacle);
}, 2000);

// update obstacles
setInterval(() => {
    obstacleArray.forEach((obstacleInstance) => {
        // move obstacle
        obstacleInstance.moveDown();

        // detect collition with player
        if (player.isCollidingWith(obstacleInstance)) {
            location.href = "./gameover.html";
        }
    });
}, 1000 / 60);


document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        player.moveLeft();
    } else if (event.code === "ArrowRight") {
        player.moveRight();
    }
})