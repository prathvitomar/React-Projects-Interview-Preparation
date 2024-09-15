import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainAccordion from './accordian-challenge/MainAccordion.jsx'
import MainRandomColor from './random-color-challenge/MainRandomColor.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : 'accordian',
        element : <MainAccordion />
      },
      {
        path : 'random-color',
        element : <MainRandomColor />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
