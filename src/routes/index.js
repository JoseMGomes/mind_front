import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Singin from '../pages/Singin';
import useAuth from '../hooks/useAuth';
import Singup from '../pages/Singup';
import Dashboard from '../pages/Templates/Dashboard';
import Cursos from '../pages/Cursos';

const Private = ({Item}) => {
    const singed = useAuth();

    return singed > 0 ? <Item /> : <Singin />;
}


const RoutesApp = () => {
  return (
        <Router>
            <>
                <Routes>
                    <Route exact path='/dashboard' element={<Private Item={Dashboard}/>} />
                    <Route exact path='/singup' element={<Singup/>} />
                    <Route path='/' element={<Singin />} />
                    <Route path='/cursos' element={<Cursos />} />
                    <Route path='*' element={<Singin/> } />
                </Routes>
            </>
        </Router>
  ) ;
}

export default RoutesApp;