import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './components/App.jsx'
//import Componente from './components/Componente.jsx'
//import Boton from './components/Boton.jsx'
//import BotonEnviar from './components/funciones/BotonEnviar.jsx'
//import AñadirJoke from './components/funciones/ApiPrueba.jsx'
import ApiAlumnos from './components/funciones/ApiAlumnos.jsx'
import CrearAlumno from './components/funciones/ApiCrearAlumno.jsx'
import ActualizarAlumno from './components/funciones/ApiActualizarAlumno.jsx'
import './index.css'
import ComponenteBusquedaAlumno from './components/funciones/BusquedaAlumno.jsx'
//import Formulario from './components/Formulario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <h1>CRUD</h1>

    <p>Crear Alumno</p>
    <CrearAlumno />

    <p>Buscar alumno por id</p>
    <ComponenteBusquedaAlumno />

    <p>Actualizar Alumno</p>
    <ActualizarAlumno />

    <p>API PHP Alumnos</p>
    <ApiAlumnos/>

  </React.StrictMode>,
)
