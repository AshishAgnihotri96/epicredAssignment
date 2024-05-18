export function calculateSavings(userInput) {
    const data = [];
    
    const baseSalaries = {
      'Australia': {
        'Mechanical Engineering': 70000,
        'Computer Science Engineering': 90000,
        'Chemical Engineering': 80000,
        'Civil Engineering': 75000,
        'Aerospace Engineering': 85000,
        'Biotechnology': 78000,
        'Electrical Engineering': 82000,
        'Finance': 87000,
      },
      'Germany': {
        'Mechanical Engineering': 60000,
        'Computer Science Engineering': 80000,
        'Chemical Engineering': 70000,
        'Civil Engineering': 65000,
        'Aerospace Engineering': 75000,
        'Biotechnology': 72000,
        'Electrical Engineering': 77000,
        'Finance': 82000,
      },
      'Canada': {
        'Mechanical Engineering': 65000,
        'Computer Science Engineering': 85000,
        'Chemical Engineering': 75000,
        'Civil Engineering': 70000,
        'Aerospace Engineering': 80000,
        'Biotechnology': 77000,
        'Electrical Engineering': 82000,
        'Finance': 86000,
      },
      'United States': {
        'Mechanical Engineering': 75000,
        'Computer Science Engineering': 95000,
        'Chemical Engineering': 85000,
        'Civil Engineering': 80000,
        'Aerospace Engineering': 90000,
        'Biotechnology': 88000,
        'Electrical Engineering': 92000,
        'Finance': 97000,
      },
    };
    
    const investmentCosts = {
      'Australia': {
        '1-50': 30000,
        '51-100': 25000,
        '101-250': 20000,
        '251-500': 15000,
        '500++': 10000,
      },
      'Germany': {
        '1-50': 20000,
        '51-100': 18000,
        '101-250': 16000,
        '251-500': 14000,
        '500++': 12000,
      },
      'Canada': {
        '1-50': 25000,
        '51-100': 22000,
        '101-250': 20000,
        '251-500': 18000,
        '500++': 15000,
      },
      'United States': {
        '1-50': 40000,
        '51-100': 35000,
        '101-250': 30000,
        '251-500': 25000,
        '500++': 20000,
      },
    };
  
    const calculateSalary = (country, branch) => {
      return baseSalaries[country][branch];
    };
  
    const calculateInvestment = (country, ranking) => {
      return investmentCosts[country][ranking];
    };
  
    userInput.targetCountry.forEach(country => {
      userInput.selectedCollegeRankings.forEach(ranking => {
        data.push({
          label: `${country} (${ranking})`,
          country,
          ranking,
          salary: calculateSalary(country, userInput.targetBranch),
          investment: calculateInvestment(country, ranking),
          currency: userInput.currency
        });
      });
    });
  
    return data;
  }
  

  // export function calculateEstimatedSavings(userInput, years = 10) {
  //   const data = [];
  
  //   const baseSalaries = {
  //     'Australia': {
  //       'Mechanical Engineering': 70000,
  //       'Computer Science Engineering': 90000,
  //       'Chemical Engineering': 80000,
  //       'Civil Engineering': 75000,
  //       'Aerospace Engineering': 85000,
  //       'Biotechnology': 78000,
  //       'Electrical Engineering': 82000,
  //       'Finance': 87000,
  //     },
  //     'Germany': {
  //       'Mechanical Engineering': 60000,
  //       'Computer Science Engineering': 80000,
  //       'Chemical Engineering': 70000,
  //       'Civil Engineering': 65000,
  //       'Aerospace Engineering': 75000,
  //       'Biotechnology': 72000,
  //       'Electrical Engineering': 77000,
  //       'Finance': 82000,
  //     },
  //     'Canada': {
  //       'Mechanical Engineering': 65000,
  //       'Computer Science Engineering': 85000,
  //       'Chemical Engineering': 75000,
  //       'Civil Engineering': 70000,
  //       'Aerospace Engineering': 80000,
  //       'Biotechnology': 77000,
  //       'Electrical Engineering': 82000,
  //       'Finance': 86000,
  //     },
  //     'United States': {
  //       'Mechanical Engineering': 75000,
  //       'Computer Science Engineering': 95000,
  //       'Chemical Engineering': 85000,
  //       'Civil Engineering': 80000,
  //       'Aerospace Engineering': 90000,
  //       'Biotechnology': 88000,
  //       'Electrical Engineering': 92000,
  //       'Finance': 97000,
  //     },
  //   };
  
  //   const investmentCosts = {
  //     'Australia': {
  //       '1-50': 30000,
  //       '51-100': 25000,
  //       '101-250': 20000,
  //       '251-500': 15000,
  //       '500++': 10000,
  //     },
  //     'Germany': {
  //       '1-50': 20000,
  //       '51-100': 18000,
  //       '101-250': 16000,
  //       '251-500': 14000,
  //       '500++': 12000,
  //     },
  //     'Canada': {
  //       '1-50': 25000,
  //       '51-100': 22000,
  //       '101-250': 20000,
  //       '251-500': 18000,
  //       '500++': 15000,
  //     },
  //     'United States': {
  //       '1-50': 40000,
  //       '51-100': 35000,
  //       '101-250': 30000,
  //       '251-500': 25000,
  //       '500++': 20000,
  //     },
  //   };
  
  //   const calculateSalary = (country, branch) => {
  //     return baseSalaries[country][branch];
  //   };
  
  //   const calculateInvestment = (country, ranking) => {
  //     return investmentCosts[country][ranking];
  //   };
  
  //   const calculateLoanRepayment = (investment, loanPercentage) => {
  //     return investment * (loanPercentage / 100);
  //   };
  
  //   userInput.targetCountry.forEach(country => {
  //     userInput.selectedCollegeRankings.forEach(ranking => {
  //       const initialInvestment = calculateInvestment(country, ranking);
  //       const annualSalary = calculateSalary(country, userInput.targetBranch);
  //       const loanRepayment = calculateLoanRepayment(initialInvestment, userInput.loanAmountPercentage);
  //       let cumulativeSavings = -initialInvestment; // Initial negative savings due to the investment
  //       let growthRate = 1.05; // 5% annual growth rate in savings
  
  //       for (let year = 1; year <= years; year++) {
  //         const annualSavings = (annualSalary - loanRepayment) * Math.pow(growthRate, year - 1);
  //         cumulativeSavings += annualSavings;
  
  //         data.push({
  //           year,
  //           cumulativeSavings,
  //           country,
  //           ranking,
  //           currency: userInput.currency,
  //         });
  //       }
  //     });
  //   });
  
  //   return data;
  // }
  
  export function calculateEstimatedSavings(userInput, years = 10) {
    const data = [];
  
    const baseSalaries = {
      'Australia': {
        'Mechanical Engineering': 70000,
        'Computer Science Engineering': 90000,
        'Chemical Engineering': 80000,
        'Civil Engineering': 75000,
        'Aerospace Engineering': 85000,
        'Biotechnology': 78000,
        'Electrical Engineering': 82000,
        'Finance': 87000,
      },
      'Germany': {
        'Mechanical Engineering': 60000,
        'Computer Science Engineering': 80000,
        'Chemical Engineering': 70000,
        'Civil Engineering': 65000,
        'Aerospace Engineering': 75000,
        'Biotechnology': 72000,
        'Electrical Engineering': 77000,
        'Finance': 82000,
      },
      'Canada': {
        'Mechanical Engineering': 65000,
        'Computer Science Engineering': 85000,
        'Chemical Engineering': 75000,
        'Civil Engineering': 70000,
        'Aerospace Engineering': 80000,
        'Biotechnology': 77000,
        'Electrical Engineering': 82000,
        'Finance': 86000,
      },
      'United States': {
        'Mechanical Engineering': 75000,
        'Computer Science Engineering': 95000,
        'Chemical Engineering': 85000,
        'Civil Engineering': 80000,
        'Aerospace Engineering': 90000,
        'Biotechnology': 88000,
        'Electrical Engineering': 92000,
        'Finance': 97000,
      },
    };
  
    const investmentCosts = {
      'Australia': {
        '1-50': 30000,
        '51-100': 25000,
        '101-250': 20000,
        '251-500': 15000,
        '500++': 10000,
      },
      'Germany': {
        '1-50': 20000,
        '51-100': 18000,
        '101-250': 16000,
        '251-500': 14000,
        '500++': 12000,
      },
      'Canada': {
        '1-50': 25000,
        '51-100': 22000,
        '101-250': 20000,
        '251-500': 18000,
        '500++': 15000,
      },
      'United States': {
        '1-50': 40000,
        '51-100': 35000,
        '101-250': 30000,
        '251-500': 25000,
        '500++': 20000,
      },
    };
  
    const calculateInvestment = (country, ranking) => {
      return investmentCosts[country][ranking];
    };
  
    const calculateLoanRepayment = (investment, loanPercentage) => {
      return investment * (loanPercentage / 100);
    };
  
    // Loop through each combination of country and ranking
    userInput.targetCountry.forEach(country => {
      userInput.selectedCollegeRankings.forEach(ranking => {
        // Calculate initial investment and loan repayment for the combination
        const initialInvestment = calculateInvestment(country, ranking);
        const loanRepayment = calculateLoanRepayment(initialInvestment, userInput.loanAmountPercentage);
  
        // Initialize cumulative savings and growth rate
        let cumulativeSavings = -initialInvestment; // Initial negative savings due to the investment
        let growthRate = 1.05; // 5% annual growth rate in savings
  
        // Loop through each year and calculate savings
        for (let year = 1; year <= years; year++) {
          const annualSalary = userInput.annualSalary; // Use user input for annual salary
          const annualSavings = (annualSalary - loanRepayment) * Math.pow(growthRate, year - 1);
          cumulativeSavings += annualSavings;
  
          // Add data entry for the current year
          data.push({
            year,
            cumulativeSavings,
            country,
            ranking,
            currency: userInput.currency,
          });
        }
      });
    });
  
    return data;
  }
  
  
  





  