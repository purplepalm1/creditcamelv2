
import { LandingPage } from './pages/landingPage';
import { Intake } from './pages/intake';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Finquiz } from './pages/finquiz';
import PredictionPage from './components/predictionpage';

function App() {
  const [predictedScore, setPredictedScore] = useState(null);

  const handlePrediction = (score) => {
    setPredictedScore(score);
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/finquiz" element={<Finquiz />} />
          <Route path="/prediction" element={<PredictionPage predictedScore={predictedScore} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
