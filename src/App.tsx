import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login';
import TabPostagem from './components/postagens/tabpostagem/TabPostagem';
import ListaTema from './components/temas/listatemas/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/temas' element={<ListaTema />} />
                <Route path='/postagem' element={<ListaPostagem />} />
                <Route path='/cadastrousuario' element={<CadastroUsuario />} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;