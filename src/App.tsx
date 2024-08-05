import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar} from './components';
import {About, Contact, Home, Projects} from './pages';

const App: React.FC = () => {
    return (
        <main className="bg-slate-300/20 min-h-screen">
            <BrowserRouter basename={'/'}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;
