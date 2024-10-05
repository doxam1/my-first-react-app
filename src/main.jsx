import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import { AddLogo } from './vitelogo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <AddLogo />
  </StrictMode>,
)
