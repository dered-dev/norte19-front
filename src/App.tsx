import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// ** Routes
import AppRoutes from './router/AppRoutes';

// ** Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollUp from './components/ScrollUp';

// ** Services
import './services/interceptors';

/**
 * The main application component, responsible for rendering the entire application layout.
 *
 * @return {React.JSX.Element} The JSX element representing the application layout
 */
const App = (): React.JSX.Element => {
  return (
    <Router>
      <Navbar />
      <ScrollUp />
      <main className="main">
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
