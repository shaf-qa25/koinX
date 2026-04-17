import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaxHarvesting from './pages/TaxHarvesting';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar yahan aayega */}
        <Routes>
          <Route path="/" element={<TaxHarvesting />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;