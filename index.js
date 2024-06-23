// Object Creation Basics:
// • Task: Create an object representing a superhero with properties like name,
// secretIdentity, powers (an array), and weakness.

// creating an object for superhero with props like secretIdentity, powers[], weakness
const superhero = {
    name: 'Kofi Yeboah',
    secretIdentity: 'Master chef',
    powers: ['mixologist', 'telepathy', 'kitchen king', 'indestructible', 'knife skills'],
    weakness: 'always hungry',
}

// Methods and Functionality:
// • Task: Add methods to the superhero object:
// o usePower(powerName): Logs a message about the hero using a
// specific power.
// o revealIdentity(): Logs the hero’s secret identity

const usePower = function (usePower) {
    this.power.map(power => {
        // console.log(power)
        if (power === usePower) {
            console.log(`this is my special power ${power}`)

        }
    })
}

const reveal = () => `I am ${this.secretIdentity}`; // does the this keyword references the object where it was declared or the object that's calling it
const revealIdentity = function() {
    return `I am ${this.secretIdentity}`;
}


superhero[usePower] = usePower;
superhero[revealIdentity] = revealIdentity; // the this keyword returns undefined here, even tho I'm calling it with an object it returns undefined, find out why
superhero[reveal] = reveal;

// superhero[usePower]('telepathy');
// superhero[usePower]('indestructible')
// console.log(superhero[revealIdentity]());
// console.log(superhero[reveal]());

// const activatePower = usePower.bind(superhero)
// activatePower('telepathy');

// superhero.usePower()

// Object Constructors:
// • Task: Create a Superhero constructor function to streamline the creation of
// multiple superheroes.


const createCharacter = function(type) {
    const Superhero = function(name, secretIdentity, power, weakness) {
        this.type = type
        this.name = name;
        this.secretIdentity = secretIdentity;
        this.power = power;
        this.weakness = weakness;
    
    }
    Superhero.prototype.usePower = usePower;
    Superhero.prototype.revealIdentity = revealIdentity;
    Superhero.prototype.speak = function(speech) {
        console.log(`Your ${this.power} won't work against me`);
    }

    return Superhero;    

}

const Hero = createCharacter('hero');
const Villain = createCharacter('villain');

const superman = new Hero("Superman", "Clark Kent", ["Flight", "Super Strength", "X-Ray Vision"], "Kryptonite")
const lexLuthor = new Villain("Lex Luthor", "Lex Luthor", ["Genius Level Intellect", "Wealth"], "Kryptonite Envy");

console.log('hero: ', superman, 'villain: ', lexLuthor)

const Superhero = function(name, secretIdentity, power, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.power = power;
    this.weakness = weakness;

}
Superhero.prototype.usePower = usePower;
Superhero.prototype.revealIdentity = revealIdentity;
Superhero.prototype.speak = function(speech) {
    console.log(`Your ${this.power} won't work against me`);
}




const vapourize = new Superhero('Dennis King', 'vapourize', ['cooling', 'freezing', 'mist'], 'fire');
const dashKid = new Superhero('Evan lewis Jr.', 'vapourize', ['cooling', 'freezing', 'mist'], 'fire');
const monsterHunter = new Superhero('Vanessa Khan', 'Monster Hunter', ['cooling', 'freezing', 'mist'], 'fire');
// console.log(vapourize);
// console.log(vapourize.revealIdentity());
// vapourize.usePower('cooling');

// Object Iteration and Transformation:
// • Task: Use forEach, map, or filter to manipulate an array of superheroes and
// supervillains

const playHero = function(...heros) {
    console.log(heros);
}
playHero(vapourize, dashKid, monsterHunter);

