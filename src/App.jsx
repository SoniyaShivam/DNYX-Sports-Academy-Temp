import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/page1'; // lowercase 'page1'
import Page2 from './components/page2'; // lowercase 'page2'
import Page3 from './components/page3'; // assuming this one is correct
import Page4 from './components/page4'; // lowercase 'page4'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Page3 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;
