export function calculateSavings(userInputs) {
    const savingsData = [];

    userInputs.targetCountry.forEach((country) => {
        const postGradSalary = calculatePostGradSalary(userInputs.annualSalary, country);

        const expenses = calculateExpenses(country);

        const averageInvestment = calculateAverageInvestment(expenses, userInputs.loanAmountPercentage);

        const netSavings = calculateNetSavings(postGradSalary, expenses, averageInvestment);

        const incrementalSavings = calculateIncrementalSavings(netSavings);

        savingsData.push({
            country: country,
            branch: userInputs.targetBranch,
            incrementalSavings: incrementalSavings,
            currency: userInputs.currency
        });
    });

    return savingsData;
}

function calculatePostGradSalary(annualSalary, targetCountry) {
    const salaryIncreasePercentages = {
        USA: { yearly: 0.03, alternate: 0.1 },
        Canada: { yearly: 0.02, alternate: 0.08 },
        Germany: { yearly: 0.025, alternate: 0.09 },
        Australia: { yearly: 0.028, alternate: 0.11 },
        India: { yearly: 0.07, alternate: 0.2 },
         
    };

    if (!(targetCountry in salaryIncreasePercentages)) {
        throw new Error(`Salary increase percentages for ${targetCountry} are not defined.`);
    }

    let postGradSalary = annualSalary;
    const increasePercentage = salaryIncreasePercentages[targetCountry];

    for (let year = 1; year <= 5; year++) {
        postGradSalary *= 1 + increasePercentage.yearly;
        if (year % 2 === 0) {
            postGradSalary *= 1 + increasePercentage.alternate;
        }
    }

    return postGradSalary;
}

function calculateExpenses(targetCountry) {
    const expenseIncreasePercentages = {
        USA: 0.02,
        Canada: 0.02,
        Germany: 0.02,
        Australia: 0.02,
        India: 0.05,
        // Add entries for all selected countries
    };

    let expenses = {
        rent: 1000,
        utilities: 200,
        transportation: 300,
        insurance: 100,
        // Add other expenses as needed
    };

    const increasePercentage = expenseIncreasePercentages[targetCountry];
    Object.keys(expenses).forEach((expense) => {
        expenses[expense] *= 1 + increasePercentage;
    });

    return expenses;
}

function calculateAverageInvestment(expenses, loanAmount) {
    let totalExpenses = Object.values(expenses).reduce((acc, curr) => acc + curr, 0);
    return totalExpenses - loanAmount;
}

function calculateNetSavings(postGradSalary, expenses, averageInvestment) {
    return postGradSalary - (Object.values(expenses).reduce((acc, curr) => acc + curr, 0) + averageInvestment);
}

function calculateIncrementalSavings(netSavings) {
    return netSavings * 5;
}
