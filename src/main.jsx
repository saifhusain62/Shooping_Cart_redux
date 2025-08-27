import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
      <Route path="/" element={<div>Home page</div>}/>
      <Route path="/products" element={<div>Products page</div>}/>
      <Route path="/cart" element={<div>Cart page</div>}/>

      </Route>
    </Routes>
  </BrowserRouter>,
)
