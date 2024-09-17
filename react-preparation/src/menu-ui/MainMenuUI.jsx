import React from 'react'
import menus from './menu'
import MenuList from './MenuList'
import './styles.css'

function MainMenuUI() {
  const data = menus
  return (
    <div className="tree-view-container">
      <MenuList list={data} />
    </div>
  )
}

export default MainMenuUI