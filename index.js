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


const createCharacter = function(type) {
    const SuperHumans = function(name, secretIdentity, power, weakness) {
        this.type = type
        this.name = name;
        this.secretIdentity = secretIdentity;
        this.power = power;
        this.weakness = weakness;
    
    }
    SuperHumans.prototype.usePower = usePower;
    SuperHumans.prototype.revealIdentity = revealIdentity;
    SuperHumans.prototype.speak = function(speech) {
        console.log(`I ${this.secretIdentity} am the strongest super human alive`);
    }

    return SuperHumans;    

}

const Hero = createCharacter('hero');
const Villain = createCharacter('villain');

// heros
const superman = new Hero( "Clark Kent", "Superman",["Flight", "Super Strength", "X-Ray Vision"], "Kryptonite")
const captainPlanet = new Hero("Obed Manu", "Captain Planet", ["Flight", "Super Strength", "X-Ray Vision"], "Kryptonite")
const ScoobyDoo = new Hero("Caleb Boadi", "Scooby Doo", ["Flight", "Super Strength", "X-Ray Vision"], "Kryptonite")

// villains
const lexLuthor = new Villain( "Lex Luthor", "Lex Luthor",["Genius Level Intellect", "Wealth"], "Kryptonite Envy");
const thanos = new Villain("Mike Mensah", "Thanos", ["Genius Level Intellect", "Wealth"], "Kryptonite Envy");
const cowGirl = new Villain("Felicia Yeboah", "Cow Girl", ["Genius Level Intellect", "Wealth"], "Kryptonite Envy");

// console.log(superman.revealIdentity())


const superHumans = [superman, captainPlanet, ScoobyDoo, lexLuthor, thanos, cowGirl];
const playHero = function(characters) {
    // forEach
    characters.forEach(character => {
        character.speak();
    })
    // map
    characters.map(character => {
        if (character.type !== 'hero') return;
        
        character.title = 'Defender of the universe';
    });


    // filter
    const heros = characters.filter(character => character.type === 'hero');
    console.log(heros);
}

playHero(superHumans);

