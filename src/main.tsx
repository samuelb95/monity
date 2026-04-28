import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { FinanceDataProvider } from './context/FinanceDataContext'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FinanceDataProvider>
      <App />
    </FinanceDataProvider>
  </StrictMode>,
)
