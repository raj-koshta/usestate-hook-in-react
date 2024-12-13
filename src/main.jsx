// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sibling from './Sibling.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Sibling />
  </>,
)
