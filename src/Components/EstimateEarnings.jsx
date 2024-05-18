import React, { useEffect, useState } from "react";
import TargetBranch from "../CustomInputs/TargetBranch";
import TargetCountry from "../CustomInputs/TargetCountry";
import CollegeRanking from "../CustomInputs/CollegeRanking";
import SelectCurrency from "../CustomInputs/SelectCurrency";

import { calculateEstimatedSavings, calculateSavings } from "./Calculation";

import SalaryIncrementChart from "./ReChartsComp";
import SavingsOverYearsChart from "./SavingsOverYears";

function EstimateEarnings() {
  const [loanPercentage, setLoanPercentage] = useState(50);
  const [annualSalary, setAnnualSalary] = useState(500000);
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const options = [
    "Aerospace Engineering",
    "Biotechnology",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Science Engineering",
    "Electrical Engineering",
    "Finance",
    "Mechanical Engineering",
  ];

  const [selectedTargetCountries, setSelectedTargetCountries] = useState([]);
  const [showTargetCountryOptions, setShowTargetCountryOptions] =
    useState(false);
  const targetCountryOptions = [
    "Australia",
    "Canada",
    "Germany",
    "United States",
  ];

  const [selectedCollegeRankings, setSelectedCollegeRankings] = useState([]);
  const [showCollegeRankingOptions, setShowCollegeRankingOptions] =
    useState(false);
  const collegeRankingOptions = [
    "1-50",
    "51-100",
    "101-250",
    "251-500",
    "500+",
  ];

  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);
  const currencyOptions = [
    "AUD (Australia)",
    "CAD (Canada)",
    "INR (India)",
    "EUR (Germany)",
    "USD (United States)",
  ];
  const calculateData = () => {
    if (selectedTargetCountries.length === 0) {
      return null;
    }
    const userInputs = {
      loanAmountPercentage: parseFloat(loanPercentage),
      annualSalary: parseFloat(annualSalary),
      targetBranch: selectedOption,
      targetCountry: selectedTargetCountries,
      currency: selectedCurrency,
      selectedCollegeRankings: selectedCollegeRankings,
    };

    return calculateSavings(userInputs);
  };
  const calculateSavingsData = () => {
    if (selectedTargetCountries.length === 0) {
      return null;
    }
    const userInputs = {
      loanAmountPercentage: parseFloat(loanPercentage),
      annualSalary: parseFloat(annualSalary),
      targetBranch: selectedOption,
      targetCountry: selectedTargetCountries,
      currency: selectedCurrency,
      selectedCollegeRankings: selectedCollegeRankings,
    };

    return calculateEstimatedSavings(userInputs);
  };
  useEffect(() => {
    calculateData();
    calculateSavingsData();
  }, [
    loanPercentage,
    annualSalary,
    selectedOption,
    selectedTargetCountries,
    selectedCurrency,
    selectedCollegeRankings,
  ]);

  return (
    <div className="estimate-earnings">
      <div className="main-container-inputs">
        <div>
          <p className="estimate-heading">
            Estimate Your{" "}
            <span style={{ color: "#e34731", fontWeight: 600 }}>
              Future Earnings
            </span>
          </p>
          <p className="earning-sub-head">
            Know the value of your desired STEM Masters course—assess its real
            return on investment and compare across countries. Considering a
            different course? Connect with an expert to explore its ROI.
          </p>
        </div>
        <div className="input-fields">
          <div className="slider">
            <div className="loan-amount">
              <label>Loan Amount (%)</label>
              <div className="loan-percent">{loanPercentage}%</div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="0.01"
              value={loanPercentage}
              onChange={(e) => setLoanPercentage(e.target.value)}
            />
            <div className="slider-values">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
          <div className="slider">
            <div className="loan-amount">
              <label>Annual Salary (INR):</label>
              <div className="loan-percent">{annualSalary} INR</div>
            </div>
            <input
              type="range"
              min="100000"
              max="4000000"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(e.target.value)}
            />
            <div className="slider-values">
              <span>1,00,000</span>
              <span>40,00,000</span>
            </div>
          </div>
          <TargetBranch
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            showOptions={showOptions}
            options={options}
            setShowOptions={setShowOptions}
            label="Target Branch"
          />
          <TargetCountry
            selectedTargetCountries={selectedTargetCountries}
            setSelectedTargetCountries={setSelectedTargetCountries}
            showTargetCountryOptions={showTargetCountryOptions}
            setShowTargetCountryOptions={setShowTargetCountryOptions}
            targetCountryOptions={targetCountryOptions}
          />
          <CollegeRanking
            selectedCollegeRankings={selectedCollegeRankings}
            setSelectedCollegeRankings={setSelectedCollegeRankings}
            showCollegeRankingOptions={showCollegeRankingOptions}
            setShowCollegeRankingOptions={setShowCollegeRankingOptions}
            collegeRankingOptions={collegeRankingOptions}
          />
          <SelectCurrency
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            showCurrencyOptions={showCurrencyOptions}
            setShowCurrencyOptions={setShowCurrencyOptions}
            currencyOptions={currencyOptions}
            label="Select Currency"
          />
        </div>
      </div>
      <div className="graph-container">
        <SavingsOverYearsChart data={calculateSavingsData()} />
        <SalaryIncrementChart data={calculateData()} />
      </div>
    </div>
  );
}

export default EstimateEarnings;
