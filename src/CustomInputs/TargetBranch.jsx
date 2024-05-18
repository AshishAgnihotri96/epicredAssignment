import React from 'react'

export default function TargetBranch({selectedOption,setSelectedOption,showOptions,options,setShowOptions,label}) {
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
      };
    
      const handleClearSelection = () => {
        setSelectedOption("");
      };
    
      const handleBoxClick = () => {
        if (!selectedOption) {
          setShowOptions(!showOptions);
        }
      };
  return (
    <div className="dropdown-container">
          <label className="dropdown-label">{label}</label>
          <div className="dropdown-box" onClick={handleBoxClick}>
            <div className="selected-option">
              {selectedOption}
              {selectedOption && (
                <button
                  className="delete-button-target"
                  onClick={handleClearSelection}
                >
                  x
                </button>
              )}
            </div>
            {showOptions && (
              <div className="options-list">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="option"
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
  )
}
