import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Anotación personal lo importante de importar una constante de una arrow fuction de un archivo jsx es hacerlo de esta manera, entre {}
//se pueden importar varios componentes dentro de un mismo import separados por coma dentro de los {}
import {Firstcomponent} from './Firstcomponent'
import ContadorApp from './ContadorApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <Firstcomponent /> */}
    <ContadorApp value={1}/>
  </React.StrictMode>,
)
