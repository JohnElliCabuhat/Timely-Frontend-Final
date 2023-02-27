import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FunctionalComp from './Components/FunctionalComp';
import Hooks from './Components/Hooks';
import Lodash from './Components/Lodash';
import NavBar from './Components/NavBar';
import RandomMain from './Components/RandomMain';


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<RandomMain />} />
                    <Route path="/randommain" element={<RandomMain />} />
                    <Route path="/hooks" element={<Hooks />} />
                    <Route path="/functionalcomp" element={<FunctionalComp />} />
                    <Route path="/lodash" element={<Lodash />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;