const fs =require('fs');
const path = require('path');


const budget = 510;

const gifts = [
    {
        name: 'nebulaLamp',
        price: 49.99,
    },
    {
        name: 'flatIron',
        price: 71.59,
    },
    {
        name: 'lipGloss',
        price: 7.99,
    },
    { name: 'avocado', price: 47.16 },
    { name: 'avocadoHat', price: 19.16 },
    { name: 'oodieBlanke', price: 84.99 },
    { name: 'aaronsPutty', price: 23.42 },
    { name: 'smartLED', price: 29.99 },
    { name: 'charger', price: 28.96 },
    { name: 'nikeShorts', price: 17.97 },
    { name: 'nikePhoenix', price: 70.4 },
    { name: 'armourFleece', price: 54.27 },
];


const total = gifts.reduce((acc, gift) => {
    return acc + gift.price;
}, 0);

const giftNames = gifts.map((gift) => gift.name);

const AubreyChristmatBudget = {
    name: 'Aubrey',
    budget: 510,
    gifts: giftNames,
    spent: total,
    difference: Math.floor(
        budget - total,
    ).toFixed(2),
};

fs.writeFile(
    path.join(__dirname, '../../ChristmasGifts/Aubrey.json'),
    JSON.stringify(AubreyChristmatBudget),
    (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    },
);

module.exports = AubreyChristmatBudget;