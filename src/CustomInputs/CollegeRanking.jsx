import React, { useEffect, useRef } from 'react'

export default function CollegeRanking({selectedCollegeRankings,setSelectedCollegeRankings,showCollegeRankingOptions,setShowCollegeRankingOptions,collegeRankingOptions}) {
  
    const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowCollegeRankingOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  const handleCollegeRankingSelect = (ranking) => {
    if (!selectedCollegeRankings.includes(ranking)) {
      setSelectedCollegeRankings([...selectedCollegeRankings, ranking]);
    }
  };

  const handleCollegeRankingDelete = (ranking) => {
    setSelectedCollegeRankings(selectedCollegeRankings.filter(item => item !== ranking));
    if (selectedCollegeRankings.length === 1) {
      setShowCollegeRankingOptions(false); // Close options if last item deleted
    }
  };

  const handleCollegeRankingBoxClick = () => {
    setShowCollegeRankingOptions(!showCollegeRankingOptions);
  };
  
    
  return (
    <div className="college-ranking-input-container">
    <label className="college-ranking-input-label">College Ranking</label>
    <div className="college-ranking-input-box" ref={inputRef} onClick={handleCollegeRankingBoxClick}>
      {selectedCollegeRankings.length > 0 ? (
        selectedCollegeRankings.map((ranking, index) => (
          <div key={index} className="selected-value">
            {ranking}
            <button className="delete-button" onClick={() => handleCollegeRankingDelete(ranking)}>x</button>
          </div>
        ))
      ) : (
        <div className="placeholder-text">Select a ranking...</div>
      )}
      {showCollegeRankingOptions && (
        <div className="options-list">
          {/* Replace options array with your options */}
          {collegeRankingOptions.map((option, index) => (
            <div key={index} className="option" onClick={() => handleCollegeRankingSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  )
}
