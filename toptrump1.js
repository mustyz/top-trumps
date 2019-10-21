let crashDeck = [
    {card: "Aku Aku", strength: 100},
    {card: "Coco Bandicoot", strength: 54},
    {card: "Crash Bandicoot", strength: 88},
    {card: "Crunch Bandicoot", strength: 86},
    {card: "Dr Neo Cortex", strength: 87},
    {card: "Dingodile", strength: 67},
    {card: "Dr N.Brio", strength: 53},
    {card: "Dr N.Gin", strength: 61},
    {card: "Evil Crash", strength: 43},
    {card: "Fake Crash", strength: 22},
    {card: "Koala Kong", strength: 77},
    {card: "Komodo Joe", strength: 51},
    {card: "Farmer Ernest", strength: 66},
    {card: "Komodo Moe", strength: 50},
    {card: "N.Trance", strength: 12},
    {card: "N.Trophy", strength: 71},
    {card: "Nina Coretex", strength: 11},
    {card: "Nitros Oxide", strength: 85},
    {card: "Papu Papu", strength: 43},
    {card: "Penta Penguin", strength: 23},
    {card: "Pinstripe", strength: 45},
    {card: "Polar", strength: 14},
    {card: "Pura", strength: 14},
    {card: "Rilla Roo", strength: 69},
    {card: "Ripper Roo", strength: 41},
    {card: "Tawna", strength: 81},
    {card: "Uka Uka", strength: 97},
    {card: "Tiny Tiger", strength: 84},
    {card: "Velo", strength: 77},
    {card: "Zem", strength: 33}
]

class Players {
    constructor(name) {
        this._name = name
        this._playingDeck = []
    }
}


let user1 = prompt("Welcome Player One, please enter your name")
let user2 = prompt("Welcome Player Two, please enter your name")
const playerOne = new Players(user1)
const playerTwo = new Players(user2)


let alert1 = alert("You both have 15 cards each")
let alert2 = alert("The main objective of the game is to obtain your opponent cards, whoever obtains all 30 cards, WINS the game!")
let alert3 = alert(`The deck has now been shuffled, ${user1}, ${user2}, get ready to BATTLE!`)


function shuffleArray(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  return (deck)
};
let newDeck = shuffleArray(crashDeck);
console.log(newDeck);


let halfDeck = Math.floor(newDeck.length / 2)

let firstSplit = newDeck.slice(0, halfDeck);
let secondSplit = newDeck.slice(halfDeck, newDeck.length);

playerOne._playingDeck = firstSplit
playerTwo._playingDeck = secondSplit

console.log(playerOne._playingDeck);
console.log(playerTwo._playingDeck);



