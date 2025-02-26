import { useEffect, useState } from "react";

function ApiAlumnos(){

    //const alumnoObj = { id: "", nombre: "", apellido: "", correo: "", telefono: "", direccion: ""}
    const [alumnos,setAlumnos] = useState([]);

    useEffect (() => {
        fetch('http://localhost:8000/alumnos.php')
            .then(response => response.json())
            .then(data => {
                setAlumnos(data);
            });
        }, []);

        return (
            <div className="alumnos" style={{ height: "250px", overflowY: "scroll" }}>
                {alumnos.length > 0 ? (
                    alumnos.map((alumno) => (
                        <div key={alumno.id} className="alumno">
                            <p><b>Nombre:</b> {alumno.nombre} {alumno.apellido}</p>
                            <p><b>Correo:</b> {alumno.correo}</p>
                            <p><b>Teléfono:</b> {alumno.telefono}</p>
                            <p><b>Dirección:</b> {alumno.direccion}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay alumnos</p>
                )}
            </div>
        );

}

export default ApiAlumnos

                // alumnoObj.nombre = data[0].nombre;
                // alumnoObj.apellido = data[0].apellido;
                // alumnoObj.correo = data[0].correo;
                // alumnoObj.telefono = data[0].telefono;
                // alumnoObj.direccion = data[0].direccion;