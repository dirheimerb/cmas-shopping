const fs = require('fs');
const path = require('path');
const BradenChristmatBudget = require('./braden');
const AubreyChristmatBudget = require('./Aubrey');
const EmersonChristmatBudget = require('./emerson');

const ChristmasBudget = [
    BradenChristmatBudget,
    AubreyChristmatBudget,
    EmersonChristmatBudget,
];

const total = ChristmasBudget.reduce((acc, budget) => {
    return acc + budget.spent;
}, 0);

const totalDifference = ChristmasBudget.reduce((acc, budget) => {
    return acc + budget.difference;
},0);

const ChristmasBudgetReport = {
    total: total,
    totalDifference: totalDifference,
    budgets: ChristmasBudget,
};

fs.writeFile(
    path.join(__dirname, '../ChristmasGifts/christmasBudget.json'),
    JSON.stringify(ChristmasBudgetReport),
    (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }
);
