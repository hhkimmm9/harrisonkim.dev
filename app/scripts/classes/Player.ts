var personImage = new Image()
personImage.src = '/images/running-person.png'

class Player {
    private x: number
    private y: number
    private width: number
    private height: number

    constructor() {
        this.x = 50
        this.y = 75
        this.width = 65
        this.height = 75
    }
    draw(ctx: CanvasRenderingContext2D) {
        if (ctx) {
            ctx.fillStyle = 'green'
            ctx?.fillRect(this.x, this.y, this.width, this.height)
            ctx.drawImage(personImage, this.x, this.y, this.width, this.height)
        }
    }
    jump() {
        this.y -= 3
    }
    fall() {
        this.y += 3
    }
    getContactPoints(): number[] {
        return [this.x, this.x + this. width, this.y, this.y + this.height]
    }
}

export default Player