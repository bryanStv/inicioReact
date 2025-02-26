import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Componente from './components/Componente.jsx'
import Boton from './components/Boton.jsx'
import BotonEnviar from './components/funciones/BotonEnviar.jsx'
//import AñadirJoke from './components/funciones/ApiPrueba.jsx'
import ApiAlumnos from './components/funciones/ApiAlumnos.jsx'
import CrearAlumno from './components/funciones/ApiCrearAlumno.jsx'
import './index.css'
//import Formulario from './components/Formulario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <p>ProbandoCosas</p>
    {/*<AñadirJoke />*/}
    <p>Crear Alumno</p>
    <CrearAlumno />
    

    <p>API PHP Alumnos</p>
    <ApiAlumnos/>

    <p>Botones</p>
    <Boton />

    <BotonEnviar />

    <App />

    <p>Emoji</p>
    <Componente />

    <p>Emoji reutilizable</p>
    <Componente />

  </React.StrictMode>,
)
