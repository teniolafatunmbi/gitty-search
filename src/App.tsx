import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Alert from './components/shared/Alert';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import { GitHubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import User from './pages/User';

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
    
  );
}

export default App;