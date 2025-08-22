import { useState } from 'react'
import './App.css'
import Autores from './componentes/autores/Main'
import Libros from './componentes/libros/Main'

//https://api-libros.ctpoba.edu.ar/
//https://github.com/damianegreco/ctp-libros-front

function App(){
  

  return(
    <>
    <div className='App'>
      <Libros />
      <Autores />
    </div>
    </>
  )
}

export default App
