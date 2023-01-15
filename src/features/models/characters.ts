import { Advisor } from './Advisor.js';
import { Fighter } from './Fighter.js';
import { King } from './King.js';
import { Squire } from './Squire.js';

const joffrey = new King(
    'Joffrey',
    'Baratheon',
    18,
    'You are all going to die',
    './assets/img/joffrey.jpg',
    1
);
const jaime = new Fighter(
    'Jaime',
    'Lannister',
    45,
    'First I hit and then I ask',
    './assets/img/jaime.jpg',
    'Sword',
    5
);
const daenerys = new Fighter(
    'Daenerys',
    'Targaryen',
    25,
    'First I hit and then I ask',
    './assets/img/daenerys.jpg',
    'Dragon',
    10
);
const tyrion = new Advisor(
    'Tyrion',
    'Lannister',
    35,
    "I don't know why, but I think I'm going to die soon",
    './assets/img/tyrion.jpg',
    daenerys
);
const bronn = new Squire(
    'Bronn',
    '',
    40,
    "I'm a loser",
    './assets/img/bronn.jpg',
    jaime,
    8
);

export const characters = [joffrey, jaime, daenerys, tyrion, bronn];
