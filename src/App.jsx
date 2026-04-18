import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import TaxHarvesting from './pages/TaxHarvesting';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<TaxHarvesting />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;