import { useState } from "react";

function ActualizarAlumno(){
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")

    const actualizarFormulario = (e) => {
        e.preventDefault()

        const datosAlumno = {id,nombre,apellido,correo,telefono,direccion}

        fetch("http://localhost:8000/alumnos_actualizar.php", 
            {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datosAlumno)
            })
            .then((response) => response.json())
            .then((data) => {
              if (data.mensaje) {
                alert(data.mensaje)
              } else {
                alert("Error: " + data.error)
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("Hubo un problema con la solicitud.")
            });
        }

    return (
        <div className="formularioCrearAlumno">
            <form onSubmit={actualizarFormulario}>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <br/>
                <label>Apellido:</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target
                .value)}/>
                <br/>
                <label>Correo:</label>
                <input type="email" value={correo} onChange={(e) => setCorreo(e.target
                .value)}/>
                <br/>
                <label>Telefono:</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target
                .value)}/>
                <br/>
                <label>Direccion:</label>
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target
                .value)}/>
                <br/>
                <button type="submit">Aactualizar Alumno</button>
                <button type="reset">Resetear</button>
            </form>
        </div>
    )

}

export default ActualizarAlumno