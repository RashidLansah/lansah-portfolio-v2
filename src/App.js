import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import CaseStudy from './CaseStudy';
import BorlaPayCaseStudy from './BorlaPayCaseStudy';
import Receipt2RecipeCaseStudy from './Receipt2RecipeCaseStudy';
import Work from './Work';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/borlapay-case-study" element={<BorlaPayCaseStudy />} />
        <Route path="/receipt2recipe-case-study" element={<Receipt2RecipeCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
