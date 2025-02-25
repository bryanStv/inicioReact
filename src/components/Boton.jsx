import { Component } from "react";

function prueba1(){
    return alert `Boton 1`;
}

export default class Boton extends Component {

    render() {
        return(
            <>
                <button onClick={prueba1} className="botonPruebas">Pulsame</button>
                <button className="botonPruebas2">Pulsame 2</button>
            </>
        )
    }
}