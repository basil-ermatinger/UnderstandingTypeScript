"use strict";
const investmentDataBasil = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
const calculateInvestmentBasil = (data) => {
    let result = [];
    let currentTotal = data.initialAmount;
    let currentInterestEarned = 0;
    for (let i = 0; i <= data.duration; i++) {
        let newCurrentTotal = currentTotal + (i === 0 ? 0 : data.annualContribution);
        currentInterestEarned += (i === 0) ? 0 : newCurrentTotal * data.expectedReturn;
        currentTotal = newCurrentTotal + currentInterestEarned;
        result.push({
            year: i,
            total: currentTotal,
            totalContribution: i * data.annualContribution,
            totalInterestEarned: currentInterestEarned
        });
    }
    return result;
};
const printResultsBasil = (result) => {
    result.forEach(r => {
        console.log(`Year: ${r.year}`);
        console.log(`Total: ${r.total}`);
        console.log(`Total Contribution: ${r.totalContribution}`);
        console.log(`Total Interest Earned: ${r.totalInterestEarned}`);
        console.log("---------------");
    });
};
const resultsBasil = calculateInvestmentBasil(investmentDataBasil);
printResultsBasil(resultsBasil);
