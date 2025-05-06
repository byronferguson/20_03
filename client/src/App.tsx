import { Outlet } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
