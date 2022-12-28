import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import Projects from './pages/projects/projects.js';
import FeaturedProject from './pages/project-pages/featured-project';
import Resume from './pages/resume.js';
import AboutMe from './pages/about-me';
import GlobalStyle from './assets/global-style';
import Footer from './components/footer';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <BrowserRouter>
            <ScrollToTop/>
                <NavBar></NavBar>
                <Routes>
                    <Route path='/portfolio/' element={ <Projects/> }/>
                    <Route path='/featured-project' element={ <FeaturedProject/> }/>
                    <Route path='/resume' element={ <Resume/> }/>
                    <Route path='/about-me' element={ <AboutMe/> }/>
                    <Route path='*' element={ <Projects/> }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
