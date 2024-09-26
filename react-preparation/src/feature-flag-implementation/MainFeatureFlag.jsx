import React, {useContext} from 'react'
import MainTicTacToe from '../tic-tac-toe/MainTicTacToe';
import MainQRgenerator from '../qr-generator/MainQRgenerator';
import MainThemeChanger from '../theme-changer/MainThemeChanger';
import MainAccordion from '../accordian-challenge/MainAccordion';
import MainScrollIndicator from '../scroll-indicator/MainScrollIndicator';
import { FeatureFlagsContext } from "./flagImplementation";

function MainFeatureFlag() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
        key : "tictactoe",
        component : <MainTicTacToe />
    },
    {
        key : "qrGenerator",
        component : <MainQRgenerator />
    },
    {
        key : "themeChanger",
        component : <MainThemeChanger />
    },
    {
        key : "accordingChallenge",
        component : <MainAccordion />
    },
    {
        key : "scrollIndicator",
        component : <MainScrollIndicator />
    },
  ]

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}

export default MainFeatureFlag