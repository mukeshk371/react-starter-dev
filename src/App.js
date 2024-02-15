import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CardContentSliderApp from './components/CardContentSlider/CardContentSlider';
import ButtonClick from './components/Forms/ButtonClick';
import NavBar from './components/NavBar/NavBar';
import StateObjectUpdate from './components/Forms/StateObjectUpdate/StateObjectUpdate';
import FormRouter from './components/Forms/FormRouter/FormRouter';
import CustomTab from './components/CustomComponents/CustomTab';
import CustomNavBar from './components/CustomComponents/CustomNavBar/CustomNavBar';

function App() {
  return (
    <Router>
      <div className='body-wrapper'>
        <NavBar />
        <CustomNavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/card-content-slider-app" element={<CardContentSliderApp />} />
            <Route path="/form" element={<FormRouter />} />
            <Route path="/button-click" element={<ButtonClick />} />
            <Route path="/state-object-update" element={<StateObjectUpdate />} />
            <Route index element={<Navigate to="/card-content-slider-app" />} />
            <Route path="/custom-tab" element={<CustomTab />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
