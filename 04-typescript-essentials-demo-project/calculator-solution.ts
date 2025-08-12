type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
}

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;

const calculateInvestment = (data: InvestmentData): CalculationResult => {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;

  if(initialAmount < 0) {
    return "Initial investment amount must be at least zero";
  } else if(duration <= 0) {
    return "No valid amount of years provided.";
  } else if(expectedReturn < 0) {
    return "Expected return must be at least zero.";
  }

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: InvestmentResult[] = [];

  for(let i = 0; i < duration; i++) {
    total *= total * (1 + expectedReturn);
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions += annualContribution;
    total += annualContribution;

    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalInterestEarned,
      totalContributions
    })
  }

  return annualResults;
};

const printResults = (results) => {

};

const results = calculateInvestment(...);

printResults(results);