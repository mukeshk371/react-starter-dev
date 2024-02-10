
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CardContentSliderApp from './components/CardContentSlider/CardContentSlider';
import ButtonClick from './components/Forms/ButtonClick';
import Form from './components/Forms/Form';
import NavBar from './components/NavBar/NavBar'; 


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/card-content-slider-app" element={<CardContentSliderApp/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/button-click" element={<ButtonClick/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
