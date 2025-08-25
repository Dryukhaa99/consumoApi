import { useState } from "react"

export default function FormularioAutores({guardarAutor}){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const guardar = (e)=>{
        e.preventDefault();
        const autor = {
            nombre,
            apellido
        }
        guardarAutor(autor);
    }
    return(
        <div className="Formulario">
            <form className="FormContenedor" onSubmit={(e)=> guardar(e)}>
                <input placeholder="Nombres" 
                type="text"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                />
                
                <input placeholder="Apellidos" 
                type="text"
                value={apellido}
                onChange={(e)=> setApellido(e.target.value)}
                />
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}