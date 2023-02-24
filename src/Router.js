import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Post from './Components/Post';
import Signup from './Components/Signup';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home/:post_id" element={<Post />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;