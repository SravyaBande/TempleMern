import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import CancellationRefund from "./pages/CancellationRefund";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";


function App() {
  return (
    <Router>
    

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/cancellation" element={<CancellationRefund />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
    </Routes>

    </Router>
  );
}

export default App;
