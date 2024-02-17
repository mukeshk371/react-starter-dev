import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CardContentSliderApp from './components/CardContentSlider/CardContentSlider';
import ButtonClick from './components/Forms/ButtonClick';
import NavBar from './components/NavBar/NavBar';
import StateObjectUpdate from './components/Forms/StateObjectUpdate/StateObjectUpdate';
import FormRouter from './components/Forms/FormRouter/FormRouter';
import CustomNavBar from './components/CustomComponents/CustomNavBar/CustomNavBar';
import Breadcrumb from './components/CustomComponents/Breadcrumb/Breadcrumb';
import CustomTab from './components/CustomComponents/CustomTab/CustomTab';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <div className='body-wrapper'>
          <NavBar />
          <Breadcrumb
            initialPaths={[
              { name: "Home", link: "/" },
              { name: "Link 1", link: "/Link 1" },
              { name: "Link 2", link: "/Link 1/Link 2" },
              { name: "Link 3", link: "/Link 1/Link 2/Link 3" },
              { name: "Link 4", link: "/Link 1/Link 2/Link 3/Link 4" }
            ]}
          />
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
      </Layout>
    </Router>
  );
}

export default App;
