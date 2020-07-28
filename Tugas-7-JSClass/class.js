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
    constructor(template) {
        this.template = template;
    }
    render() {
        var date = new Date(this.template);

        var hours = date.getHours();
        if (hours < 10) {
            hours = '0' + this.hours;
        }
        var mins = date.getMinutes();
        if (mins < 10) {
            mins = '0' + this.mins;
        }
        var secs = date.getSeconds();
        if (secs < 10) {
            secs = '0' + this.secs;
        }
        template.replace('h', this.hours);
        template.replace('h', this.mins);
        template.replace('h', this.secs);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();