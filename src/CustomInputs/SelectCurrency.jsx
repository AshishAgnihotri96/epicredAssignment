import React from 'react';

export default function SelectCurrency({ selectedCurrency, setSelectedCurrency, showCurrencyOptions, setShowCurrencyOptions, currencyOptions, label }) {
    const handleCurrencySelect = (currency) => {
        setSelectedCurrency(currency);
        setShowCurrencyOptions(false);
    };

    const handleClearSelection = () => {
        setSelectedCurrency('');
    };

    const handleBoxClick = () => {
        if (!selectedCurrency) {
            setShowCurrencyOptions(!showCurrencyOptions);
        }
    };

    return (
        <div className="dropdown-container">
            <label className="dropdown-label">{label}</label>
            <div className="dropdown-box" onClick={handleBoxClick}>
                <div className="selected-option">
                    {selectedCurrency}
                    {selectedCurrency && (
                        <button
                            className="delete-button"
                            onClick={handleClearSelection}
                        >
                            x
                        </button>
                    )}
                </div>
                {showCurrencyOptions && (
                    <div className="options-list">
                        {currencyOptions.map((option, index) => (
                            <div
                                key={index}
                                className="option"
                                onClick={() => handleCurrencySelect(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
