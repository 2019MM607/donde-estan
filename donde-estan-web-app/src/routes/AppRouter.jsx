
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Acerca } from '../screens/Acerca';
import { AgregarDesaparecido } from '../screens/AgregarDesaparecido';
import { Contacto } from '../screens/Contacto';
import { Desaparecido } from '../screens/Desaparecido';

import { Home } from '../screens/Home';
import { Layout } from '../screens/Layout';
import { NotFound } from '../screens/NotFound';


export const AppRouter = () => {
    return (


        <BrowserRouter className="bg-green-300">


            <Routes>

                <Route path='/' element={<Layout />} >

                    <Route index element={<Home />} />
                    <Route path='/agregar' element={<AgregarDesaparecido />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/acerca' element={<Acerca />} />
                    <Route path='/desaparecido/:name' element={<Desaparecido />} />
                    <Route path="*" element={<NotFound />} />

                </Route>


            </ Routes>
        </BrowserRouter>


    )
}
