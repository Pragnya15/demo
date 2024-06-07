import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirstApp from './component/FirstApp.jsx'
// import {FirstApp} from './component/FirstApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp/>
  </React.StrictMode>
)
