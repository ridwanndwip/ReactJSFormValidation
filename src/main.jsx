import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Validation from './Validation.jsx'
import ValidationPart2 from './ValidationPart2.jsx'
import ValidationMultiField from './ValidationMultiField.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Validation/> */}
    {/* <ValidationPart2/> */}
    <ValidationMultiField/>
  </StrictMode>,
)
