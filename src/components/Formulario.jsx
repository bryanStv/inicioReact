import { Component } from "react";
import { useRef, useEffect} from 'react';

//const formulario1 = document.getElementsByClassName("form1")
//const ref = useRef(null);

export function BotonEnviar(){
    const ref = useRef(null);

    useEffect(() => {
        console.log("Prueba")
        const eventoEnviar = event => {
            console.log("Probando")
            console.log("Probando2")
            event;
        }

        const botonEnviar = ref.current;

        botonEnviar.addEventListener('click',eventoEnviar());

        return () => {
            botonEnviar.removeEventListener('click', eventoEnviar());
            };
   }, []);
}

export default class Formulario extends Component {
    render(){
        return (
            <>
            <h1>Formulario</h1>
            {/*<form className="form1" action="" method="post">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" className="nombre" name="nombre" required></input>

                <button ref={submit} type="submit">Envia</button>
                <button type="reset">Resetea</button>
            </form>*/}
            </>
        )
    }
}