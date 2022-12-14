import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import Projects from './pages/projects/projects.js';
import GlobalStyle from './assets/global-style';
import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path='/portfolio/' element={ <Projects/> }/>
                    <Route path='*' element={ <Projects/> }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
