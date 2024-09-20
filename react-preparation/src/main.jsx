import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainAccordion from './accordian-challenge/MainAccordion.jsx'
import MainRandomColor from './random-color-challenge/MainRandomColor.jsx'
import MainStarRating from './star-rating/MainStarRating.jsx'
import MainImageSlider from './image-slider/MainImageSlider.jsx'
import MainLoadMore from './load-more-data/MainLoadMore.jsx'
import MainMenuUI from './menu-ui/MainMenuUI.jsx'
import MainQRgenerator from './qr-generator/MainQRgenerator.jsx'
import MainThemeChanger from './theme-changer/MainThemeChanger.jsx'
import MainScrollIndicator from './scroll-indicator/MainScrollIndicator.jsx'
import MainCustomTab from './custom-tab/MainCustomTab.jsx'
import MainModalPopUp from './modal-popup/MainModalPopUp.jsx'

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
      {
        path : 'load-more',
        element : <MainLoadMore />
      },
      {
        path : 'menu-ui',
        element : <MainMenuUI />
      },
      {
        path : 'qr-generator',
        element : <MainQRgenerator />
      },
      {
        path : 'theme-changer',
        element : <MainThemeChanger />
      },
      {
        path : 'scroll-indicator',
        element : <MainScrollIndicator />
      },
      {
        path : 'custom-tab',
        element : <MainCustomTab />
      },
      {
        path : 'modal-popup',
        element : <MainModalPopUp />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
