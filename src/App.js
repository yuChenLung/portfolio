import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import Projects from './pages/projects';
import GlobalStyle from './assets/global-style';

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route exact path='/' element={ <Projects/> }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
