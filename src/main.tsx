import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppProvider from './App-provider.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AppProvider />
  </React.StrictMode>,
)
