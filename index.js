// Object Creation Basics:
// • Task: Create an object representing a superhero with properties like name,
// secretIdentity, powers (an array), and weakness.

// creating an object for superhero with props like secretIdentity, powers[], weakness
const superhero = {
    secretIdentity: 'Captain Man',
    powers: ['unlimited fire', 'telepathy', 'indestructible'],
    weakness: 'water',
}

// Methods and Functionality:
// • Task: Add methods to the superhero object:
// o usePower(powerName): Logs a message about the hero using a
// specific power.
// o revealIdentity(): Logs the hero’s secret identity

const usePower = function (usePower) {
    this.powers.map(power => {
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

superhero[usePower]('telepathy');
superhero[usePower]('indestructible')
console.log(superhero[revealIdentity]());
console.log(superhero[reveal]());

// const activatePower = usePower.bind(superhero)
// activatePower('telepathy');

// superhero.usePower()

// Object Constructors:
// • Task: Create a Superhero constructor function to streamline the creation of
// multiple superheroes.
