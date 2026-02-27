


class Player {
    constructor () {
        this.positionX = 40;
        this.positionY = 0;
        this.width = 20;
        this.height =  20;

        this.updateUI();
    }

    updateUI () {
        const playerElm = document.getElementById("player");
        playerElm.style.left = this.positionX + "vw";
        playerElm.style.bottom = this.positionY + "vw";
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
}

const player = new Player();


document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        player.moveLeft();
    } else if (event.code === "ArrowRight") {
        player.moveRight();
    }
})