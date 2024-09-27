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
import MainGithubFinder from './github-profile-finder/MainGithubFinder.jsx'
import GithubProfile from './github-profile-finder/GithubProfile.jsx'
import MainSearchAutoComplete from './search-autocomplete/MainSearchAutoComplete.jsx'
import MainTicTacToe from './tic-tac-toe/MainTicTacToe.jsx'
import MainUseFetch from './use-fetch/MainUseFetch.jsx'
import MainFeatureFlag from './feature-flag-implementation/MainFeatureFlag.jsx'
import MainScrollToBottom from './scroll-to-bottom/MainScrollToBottom.jsx'
import MainScrollToParticularSection from './scroll-to-particular-section/MainScrollToParticularSection.jsx'

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
      {
        path : 'github-finder',
        element : <MainGithubFinder />
      },
      {
        path : 'search-autocomplete',
        element : <MainSearchAutoComplete />
      },
      {
        path : 'tic-tae-toe',
        element : <MainTicTacToe />
      },
      {
        path : 'use-fetch',
        element : <MainUseFetch />
      },
      {
        path : 'flag-implementation',
        element : <MainFeatureFlag />
      },
      {
        path : 'scroll-to-bottom',
        element : <MainScrollToBottom />
      },
      {
        path : 'scroll-to-particular-section',
        element : <MainScrollToParticularSection />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
