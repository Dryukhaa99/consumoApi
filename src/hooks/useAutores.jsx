// import { useState } from "react";

// export default function useAutorForm(){
//     const [nombre, setNombre] = useState('');
//     const [apellido, setApellido] = useState('');

//     const setDatos = (campo, valor) =>{
//         switch(campo){
//             case 'nombre':
//                 setNombre(valor);
//                 break;
//             case 'apellido':
//                 setApellido(valor);
//                 break;
//             default:
//             break;
//         }
//     }

//     const limpiarDatos = ()=>{
//         setNombre('');
//         setApellido('');
//     }

//     return [{nombre, apellido}, setDatos, limpiarDatos]
// }