const fs =require('fs');
const path = require('path');


const budget = 510;

const gifts = [
    {
        name: 'Charm Bracelet Making Kit',
        price: 20.22,
    },
    {
        name: ' 3D Printing Pen',
        price: 43.97,
    },
    {
        name: 'Bath Bombs',
        price: 17.94,
    },
    {
        name: 'ZQDoll',
        price: 25.99,
    },
    {
        name: 'Lite Brite',
        price: 20.34,
    },
    {
        name: 'Art Case',
        price: 23.81,
    },
    {
        name: 'Squishy Bunnycorn',
        price: 39.99,
    },
    {
        name: 'Loopdedoo Deluxe',
        price: 55.16,
    },
    {
        name: 'fujifilmInstaxMini9',
        price: 134.95,
    },
    {
        name: 'magicCrystalBall',
        price: 61.99,
    },
    {
        name: 'waterBottle',
        price: 10.99,
    },
    {
        name: 'schoolWaterBottle',
        price: 10.99,
    },
    {
        name: 'backpack',
        price: 99.99,
    },
];

const total = gifts.reduce((acc, gift) => {
    return acc + gift.price;
}, 0);

const giftNames = gifts.map((gift) => gift.name);

const EmersonChristmatBudget = {
    name: 'Emerson',
    budget: 510,
    gifts: giftNames,
    spent: total,
    difference: Math.floor(
        budget - total,
    ).toFixed(2),
};

fs.writeFile(
    path.join(__dirname, 'christmasList.json'),
    JSON.stringify(EmersonChristmatBudget),
    (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    },
);

module.exports = EmersonChristmatBudget;