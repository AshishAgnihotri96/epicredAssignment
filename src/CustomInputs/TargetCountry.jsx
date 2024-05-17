import React from 'react'

export default function TargetCountry({selectedTargetCountries,setSelectedTargetCountries,showTargetCountryOptions,setShowTargetCountryOptions,targetCountryOptions}) {
    const handleTargetCountrySelect = (country) => {
        if (!selectedTargetCountries.includes(country)) {
          setSelectedTargetCountries([...selectedTargetCountries, country]);
        }
      };
    
      const handleTargetCountryDelete = (country) => {
        setSelectedTargetCountries(selectedTargetCountries.filter(item => item !== country));
      };
    
      const handleTargetCountryBoxClick = () => {
        setShowTargetCountryOptions(!showTargetCountryOptions);
      };
  return (
    <div className="target-country-input-container">
      <label className="target-country-input-label">Target Country</label>
      <div className="target-country-input-box" onClick={handleTargetCountryBoxClick}>
        {selectedTargetCountries.length > 0 ? (
          selectedTargetCountries.map((country, index) => (
          
             <div key={index} className="selected-value">
              {country}
              <button className="delete-button" onClick={() => handleTargetCountryDelete(country)}>x</button>
            </div>
          
          ))
        ) : (
          <div className="placeholder-text">Select country...</div>
        )}
        {showTargetCountryOptions && (
          <div className="options-list-target-coutry">
           
            {targetCountryOptions.map((option, index) => (
              <div key={index} className="option" onClick={() => handleTargetCountrySelect(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
