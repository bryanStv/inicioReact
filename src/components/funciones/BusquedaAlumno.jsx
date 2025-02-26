import { useState } from 'react';
import buscarAlumno from './ApiBuscarAlumno';
import ApiBorrarAlumno from './ApiBorrarAlumno';

function ComponenteBusquedaAlumno() {
    const [id, setId] = useState('');
    const { alumno, error, fetchAlumno } = buscarAlumno(id);
    const { borrarAlumno } = ApiBorrarAlumno(id);

    const buscarAlumnoPorId = (e) => {
        e.preventDefault();
        fetchAlumno();
    };

    const confirmarBorrado = () => {
        const confirmar = window.confirm("Seguro que quieres borrar al alumno?");

        if(confirmar) {
            borrarAlumno()
            alert("Alumno borrado correctamente")
        }else{
            alert("No se ha borrado el alumno")
        }
    };


    return (
        <div>
            <form onSubmit={buscarAlumnoPorId}>
                <label>ID del Alumno:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <button type="submit">Buscar Alumno</button>
            </form>

            {error && <p>{error}</p>}

            {alumno === false ? (
                <p>No se encontró el alumno.</p>
            ) : (
                alumno && (
                    <div>
                        <p>Alumno Encontrado:</p>
                        <p>ID: {alumno.id}</p>
                        <p>Nombre: {alumno.nombre}</p>
                        <p>Apellido: {alumno.apellido}</p>
                        <p>Correo: {alumno.correo}</p>
                        <p>Teléfono: {alumno.telefono}</p>
                        <p>Dirección: {alumno.direccion}</p>
                        <button onClick={confirmarBorrado}>Confirmar Borrado</button>
                    </div>
                )
            )}
        </div>
    );
}

export default ComponenteBusquedaAlumno;