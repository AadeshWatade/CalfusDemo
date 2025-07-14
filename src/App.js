import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Demo from './components/Demo';
import TestCaseDemo from './components/TestCaseDemo';
import MainFooter from './components/MainFooter';
import Clarion from './components/Clarion';
import SignupPage from './components/SignupPage';
import Login from './components/LoginPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/testCase" element={<TestCaseDemo />} />
          <Route path="/clarion" element={<Clarion />} /> 
          {/* <Route path="/analytics" element={<Analytics />} /> */}
          <Route path="/cards" element={<Cards />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <MainFooter /> */}
      </Router>
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
    </>
  );
}

export default App;
