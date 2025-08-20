import { useState } from "react"

export default function FormularioLibros({autores}){
    const [titulo, setTitulo] = useState ('')
    const [isbn, setIsbn] = useState ('')
    const [generos, setGeneros] = useState ('')
    const [sinopsis, setSinopsis] = useState ('')
    const [autor_id, setAutorId] = useState ('')

    const guardar = (e)=>{
      e.preventDefault();
    }

    return(
        <div className="Formulario">
            <form className="FormContenedor" onSubmit={(e)=> guardar(e)}>
                <input
                value={titulo} onChange={(e)=>setTitulo(e.target.value)}
                type="text" 
                placeholder="Titulo"
                />
                <input
                value={isbn} onChange={(e)=>setIsbn(e.target.value)}
                type="text" 
                placeholder="ISBN"
                />
                <input
                value={generos} onChange={(e)=>setGeneros(e.target.value)}
                type="text" 
                placeholder="Generos"
                />
                <input
                value={sinopsis} onChange={(e)=>setSinopsis(e.target.value)}
                type="text" 
                placeholder="Sinopsis"
                />
                <label>Autor</label>
                <select value={autor_id} onChange={(e)=>setAutorId(e.target.value)}>

                    {autores.map ((autor, index)=>
                     <option key={autor._id} value={autor._id}>
                        {autor.apellido}, {autor.nombre}
                     </option>
                    )}

                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}