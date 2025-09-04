import { Link } from "wouter"

export default function Header(){
    return(
        <div className="Header">
            <Link to="/autores" style={{textDecoration: 'none'}}>
              <span className="Boton">Autores</span>
            </Link>
              <Link to="/libros" style={{textDecoration: 'none'}}>
              <span className="Boton">Libros</span>
            </Link>
        </div>
    )
}