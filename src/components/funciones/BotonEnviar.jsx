import {useRef, useEffect} from 'react';

function BotonEnviar(){
 const ref = useRef(null);

 useEffect(() => {
    const eventoEnviar = event => {
        event.preventDefault();
        console.log("Probando");
        console.log(botonEnviar);
    }

    const botonEnviar = ref.current;

    botonEnviar.addEventListener('click',eventoEnviar);

    return () => {
        botonEnviar.removeEventListener('click', eventoEnviar);
      };
}, []);

return(
    <>
    <form className="form1">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" className="nombre" name="nombre" required></input>

        <button ref={ref} type="submit">Envia</button>
        <button type="reset">Resetea</button>
    </form>
    </>
)
}

export default BotonEnviar