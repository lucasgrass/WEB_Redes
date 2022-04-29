import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/home'
import Gondola_Entry from './views/gondola_entry'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Gondola_Entry />
  </React.StrictMode>
)
