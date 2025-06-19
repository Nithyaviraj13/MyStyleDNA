import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Result.css'; // Your Result page CSS

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { style, occasion, outfit } = location.state || {}; // outfit is now an object

    const handleGoBack = () => {
        navigate("/");
    };

    // Make sure to check if outfit and outfit.description exist before trying to render
    if (!style || !occasion || !outfit || !outfit.description) {
        return (
            <div className="result-container">
                <p className="missing-data-message">
                    Missing result data. Please go back and complete the quiz.
                </p>
                <button onClick={handleGoBack} className="back-button">
                    Go Back to Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="result-container">
            <h2 className="result-title">👗 Your Style DNA Result</h2>

            <p className="result-text"><strong>✨ Your Style:</strong> {style}</p>
            <p className="result-text"><strong>🎯 Occasion:</strong> {occasion}</p>

            <div className="outfit-suggestion-box">
                <h3>🪞 Outfit Suggestion:</h3>
                {outfit.imageUrl && ( // Only render image if imageUrl exists
                    <div className="outfit-image-wrapper">
                        <img src={outfit.imageUrl} alt={`${style} outfit for ${occasion}`} className="outfit-image" />
                    </div>
                )}
                <p className="result-text">
                    Your <strong>{style}</strong> style outfit for <strong>{occasion}</strong>: {outfit.description} {/* <-- CORRECTED LINE! */}
                </p>
            </div>

            <button onClick={handleGoBack} className="back-button">
                Go Back to Quiz
            </button>
        </div>
    );
};

export default Result;