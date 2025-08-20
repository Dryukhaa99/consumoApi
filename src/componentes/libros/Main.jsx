import {use, useState} from 'react';
import FormularioLibros from './Formulario';
import ListadoLibros from './Listado';
// import useLibroForm from '../../hooks/useLibro';

const autoresEjemplo = [
  {_id:1, nombre: 'ejemplo1', apellido: 'ejemplo1'},
  {_id:2, nombre: 'ejemplo2', apellido: 'ejemplo2'},
  {_id:3, nombre: 'ejemplo3', apellido: 'ejemplo3'},
  {_id:4, nombre: 'ejemplo4', apellido: 'ejemplo4'},
  {_id:5, nombre: 'ejemplo5', apellido: 'ejemplo5'}
]

const librosEjemplo = [
    {id:1, titulo:'ejemplo1', isbn:'ejemplo1', generos:'ejemplo1', sinopsis:'ejemplo1', autor:{nombre:'ejemplo1', apellido:'ejemplo1'}}
]
export default function Libros(){
    // const [datos, setDatos, limpiarDatos] = useLibroForm();

    const eliminar = (libro_id)=>{

    }

    const guardar = (datos)=>{

    }
    return(
        <div className='Seccion' style={{backgroundColor:'lightgrey'}}>
            <FormularioLibros 
              autores = {autoresEjemplo}
              guardar={(datos) => guardar(datos)}
            />
            <ListadoLibros
               libros = {librosEjemplo}
               eliminar={(libro_id)=>eliminar(libro_id)}            
            />
        </div>
    )
}