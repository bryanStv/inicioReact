import { useState } from 'react';

function ApiBorrarAlumno(id) {
    const [error, setError] = useState(null);
    const [mensaje, setMensaje] = useState(null);

    const borrarAlumno = () => {
        fetch(`http://localhost:8000/alumnos_borrar.php?id=${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    setMensaje(null);
                } else {
                    setMensaje(data.mensaje);
                    setError(null);
                }
            })
            .catch((err) => {
                console.error('Error:', err);
                setError('Hubo un problema al borrar el alumno');
                setMensaje(null);
            });
    };

    return {
        mensaje,
        error,
        borrarAlumno // llamar a la API para borrar
    };
}

export default ApiBorrarAlumno;