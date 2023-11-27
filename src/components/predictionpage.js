import React from 'react';

const PredictionPage = ({ predictedScore }) => {
    return (
        <div>
            <h2>Predicted Credit Score</h2>
            {predictedScore !== null ? (
                <p>The predicted credit score is: {predictedScore}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PredictionPage;
