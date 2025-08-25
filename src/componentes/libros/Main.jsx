import {use, useEffect, useState} from 'react';
import axios from 'axios';
import FormularioLibros from './Formulario';
import ListadoLibros from './Listado';
// import useLibroForm from '../../hooks/useLibro';

export default function Libros(){
    // const [datos, setDatos, limpiarDatos] = useLibroForm();
    const [libros, setLibros] = useState([]);
    const [autores, setAutores] = useState([]);

    const eliminar = (libro_id)=>{
       const url = `https://api-libros.ctpoba.edu.ar/v1/libros/${libro_id}`;
        const config ={
            headers:{authorization: '123456'}
        }

        axios.delete(url, config)
        .then((resp)=>{
            console.log(resp.data);
            obtenerLibros();
            obtenerAutores();
        })
        .catch((error)=>{
            console.error(error);
        })
    }

    const guardar = (datos)=>{
       const url = 'https://api-libros.ctpoba.edu.ar/v1/libros/';
        const config ={
            headers:{authorization: '123456'}
        }
        axios.post(url, datos, config)

        .then((resp)=>{
            console.log(resp.data)
            obtenerLibros();
        })
        .catch((error)=>{
            console.error(error)
        })
    }

     const obtenerAutores = ()=>{
        const url = 'https://api-libros.ctpoba.edu.ar/v1/autores/';
        axios.get(url)
        .then((resp)=>{
          setAutores(resp.data.autores);
        })
        .catch((error)=>{
          console.error(error)
        })
    }

    const obtenerLibros = ()=>{
      const url = 'https://api-libros.ctpoba.edu.ar/v1/libros/';
      axios.get(url)
      .then((resp)=>{
          setLibros(resp.data.libros);
        })
        .catch((error)=>{
          console.error(error)
        })
    }

    useEffect(()=>{
      obtenerAutores();
      obtenerLibros();
    }, [])
    return(
        <div className='Seccion' style={{backgroundColor:'lightgrey'}}>
            <FormularioLibros 
              autores = {autores}
              guardarLibro={(datos) => guardar(datos)}
            />
            <ListadoLibros
              libros = {libros}
              eliminar={(libro_id)=>eliminar(libro_id)}            
            />
        </div>
    )
}