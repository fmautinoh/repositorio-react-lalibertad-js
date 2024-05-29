import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginComponent from './componentes/Login/LoginComponent'
import PrincipalComponent from './componentes/Principal'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrincipalComponent/>
  </React.StrictMode>,
)
