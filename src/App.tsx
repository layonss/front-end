import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}
export default App;