import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainAccordion from './accordian-challenge/MainAccordion.jsx'
import MainRandomColor from './random-color-challenge/MainRandomColor.jsx'
import MainStarRating from './star-rating/MainStarRating.jsx'
import MainImageSlider from './image-slider/MainImageSlider.jsx'

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
      {
        path : 'star-rating',
        element : <MainStarRating />
      },
      {
        path : 'image-slider',
        element : <MainImageSlider />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
