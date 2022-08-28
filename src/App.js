import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import Projects from './pages/projects';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route exact path='/projects' element={ <Projects/> }/>
                    <Route path='/projects' element={ <Projects/> }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
