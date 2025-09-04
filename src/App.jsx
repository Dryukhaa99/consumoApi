import { useState } from 'react'
import './App.css'
import Autores from './componentes/autores/Main'
import Libros from './componentes/libros/Main'
import {Router, Switch, Route, Redirect} from 'wouter';
import Header from './componentes/comun/Header';

//https://api-libros.ctpoba.edu.ar/
//https://github.com/damianegreco/ctp-libros-front

function App(){
  

  return(
    <>
    <div className='App'>
      <Router>
        <Header/>
        <Switch>
          <Route path='/autores'>
            <Autores/>
          </Route>
          <Route path='/libros'>
            <Libros/>
          </Route>
          <Route>
            <Redirect to='/autores'/>
          </Route>
        </Switch>
      </Router>

      {/* <Libros />
      <Autores /> */}
    </div>
    </>
  )
}

export default App
