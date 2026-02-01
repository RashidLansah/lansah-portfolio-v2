import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import CaseStudy from './CaseStudy';
import JenesysCaseStudy from './JenesysCaseStudy';
import BorlaPayCaseStudy from './BorlaPayCaseStudy';
import Receipt2RecipeCaseStudy from './Receipt2RecipeCaseStudy';
import TumaPayCaseStudy from './TumaPayCaseStudy';
import ReliefLedgerCaseStudy from './ReliefLedgerCaseStudy';
import TikitiCaseStudy from './TikitiCaseStudy';
import TikitiDashboardCaseStudy from './TikitiDashboardCaseStudy';
import ParleyAICaseStudy from './ParleyAICaseStudy';
import MrVisaCaseStudy from './MrVisaCaseStudy';
import KaakaCaseStudy from './KaakaCaseStudy';
import SheFundItCaseStudy from './SheFundItCaseStudy';
import Work from './Work';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/case-study" element={<JenesysCaseStudy />} />
        <Route path="/jenesys-case-study" element={<JenesysCaseStudy />} />
        <Route path="/case-study-old" element={<CaseStudy />} />
        <Route path="/tumapay-case-study" element={<TumaPayCaseStudy />} />
        <Route path="/borlapay-case-study" element={<BorlaPayCaseStudy />} />
        <Route path="/receipt2recipe-case-study" element={<Receipt2RecipeCaseStudy />} />
        <Route path="/reliefledger-case-study" element={<ReliefLedgerCaseStudy />} />
        <Route path="/tikiti-case-study" element={<TikitiCaseStudy />} />
        <Route path="/tikiti-dashboard-case-study" element={<TikitiDashboardCaseStudy />} />
        <Route path="/parley-case-study" element={<ParleyAICaseStudy />} />
        <Route path="/mrvisa-case-study" element={<MrVisaCaseStudy />} />
        <Route path="/kaaka-case-study" element={<KaakaCaseStudy />} />
        <Route path="/shefundit-case-study" element={<SheFundItCaseStudy />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
