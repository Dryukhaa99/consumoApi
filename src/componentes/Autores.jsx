import {use, useState} from 'react';
export default function Autores(){
    const [datos, setDatos] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    return(
        <div className='Panel'>
            <form>
              <input 
               type="text" 
               placeholder="Nombre"
               value={datos.nombre}
               onChange={(e)=>setDatos(e.target.value)}
              />
              <input 
               type="text" 
               placeholder="Apellido"
               value={datos.apellido}
               onChange={(e)=>setDatos(e.target.value)}
              />
            </form>
        </div>
    )
}