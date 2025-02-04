import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import 'modern-normalize'
import { Toaster } from 'react-hot-toast'
import {ThemeProvider} from './components/Provider/ThemeProvider/ThemeProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <Toaster/>
  </StrictMode>,
)
