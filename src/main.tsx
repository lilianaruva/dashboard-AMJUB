import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/index.tsx'
import Dashboard from './pages/Dashboard/index.tsx'
import Login from './pages/Login/index.tsx'
import Table from './pages/Table/index.tsx'
import Credentials from './pages/Credentials/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/registros' element={<Table />} />
          <Route path='/credenciales' element={<Credentials />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
