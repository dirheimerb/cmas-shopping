const fs =require('fs');
const path = require('path');


const budget = 510.00;
const gifts = [
    {
        name: 'Air Pod Pros',
        price: 212.99,
    },
    {
        name: 'Nike Dunk Low',
        price: 217.21,
    },
    {
        name: 'NBA Basketball Cards',
        price: 56.96,
    }
];

const total = gifts.reduce((acc, gift) => {
    return acc + gift.price;
}, 0);

const giftNames = gifts.map((gift) => gift.name);

const BradenChristmatBudget = {
    name: 'Braden',
    budget: 510.00,
    gifts: giftNames,
    spent: total,
    difference: Math.floor(
        budget - total,
    ).toFixed(2),
};

fs.writeFile(
    path.join(__dirname, '../../ChristmasGifts/Braden.json'),
    JSON.stringify(BradenChristmatBudget),
    (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    },
);

module.exports = BradenChristmatBudget;