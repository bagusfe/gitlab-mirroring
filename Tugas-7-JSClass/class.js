class Animal {
    constructor(name) {
        this.name = name;
    }
    get legs() {
        return 4;
    }
    get cold_blooded() {
        return false;
    }
}

var sheep = new Animal("shaun");
console.log("---- SOAL 1 ----")
console.log("    Release 0")
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false


console.log(" ")
console.log("    Release 1")
class Ape {
    constructor(nama) {
        this.kera = nama;
    }
    yell() {
        return "Auououo";
    }
}
class Frog {
    constructor(name) {
        this.katak = name;
    }
    jump() {
        return "Hop Hop";
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.yell()) // "Auooo"

var kodok = new Frog("buduk")
console.log(kodok.jump()) // "hop hop" 

console.log(" ")
console.log("---- SOAL 2 ----")

class Clock {
    // Code di sini
    constructor(template) {
        this.date
        this.hours
        this.mins
        this.secs
        this.timer
        this.output = template
        this.output = this.output.template.split(':')

    }

    render() {
        this.date = new Date();
        this.hours = this.date.getHours()
        if (this.hours < 10) {
            this.hours = '0' + this.hours;
        }
        this.mins = this.date.getMinutes()
        if (this.mins < 10) {
            this.mins = '0' + this.mins;
        }
        this.secs = this.date.getSeconds()
        if (this.secs < 10) {
            this.secs = '0' + this.secs;
        }
        this.output = this.hours + ':' + this.mins + ':' + this.secs
        console.log(this.output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render
        this.timer = setInterval(this.render.bind(this), 1000)
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();