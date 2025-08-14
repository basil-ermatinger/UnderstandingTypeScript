"use strict";
const calculateInvestment = (data) => {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial investment amount must be at least zero";
    }
    else if (duration <= 0) {
        return "No valid amount of years provided.";
    }
    else if (expectedReturn < 0) {
        return "Expected return must be at least zero.";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total *= 1 + expectedReturn;
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions += annualContribution;
        total += annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults;
};
const printResults = (results) => {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    results.forEach(r => {
        console.log(r.year);
        console.log(`Total: ${r.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${r.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${r.totalInterestEarned.toFixed(0)}`);
        console.log("---------------");
    });
};
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
