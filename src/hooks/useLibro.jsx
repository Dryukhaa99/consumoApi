// import { useState } from "react";

// export default function useLibroForm(){
//     const [titulo, setTitulo] = useState('');
//     const [isvn, setIsvn] = useState('');
//     const [genero, setGenero] = useState('');
//     const [sinopsis, setSinopsis] = useState('');
//     const [autorId, setAutorId] = useState('');

//     const setDatos = (campo, valor)=>{
//         switch(campo){
//             case 'titulo':
//                 setTitulo(valor);
//                 break;
//             case 'isvn':
//                 setIsvn(valor);
//                 break;
//             case 'genero':
//                 setGenero(valor);
//                 break;
//             case 'sinopsis':
//                 setSinopsis(valor);
//                 break;
//             case 'autorId':
//                 setAutorId(valor);
//                 break;
//             default:
//             break; 
//         }
//     }

//     const limpiarDatos = ()=>{
//         setTitulo('');
//         setIsvn('');
//         setGenero('');
//         setSinopsis('');
//         setAutorId('');
//     }

//     return[{titulo, isvn, genero, sinopsis, autorId}, setDatos, limpiarDatos];
// }