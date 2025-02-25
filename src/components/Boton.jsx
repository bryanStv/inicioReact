import { Component } from "react";

function prueba1(){
    return alert `Boton 1`;
}

function prueba2(){
    const broma = document.getElementById("broma");

    return alert(broma.outerText);
}

export default class Boton extends Component {

    render() {
        return(
            <>
                <button onClick={prueba1} className="botonPruebas">Pulsame</button>
                <button onClick={prueba2} className="botonPruebas2">Pulsame 2</button>
            </>
        )
    }
}