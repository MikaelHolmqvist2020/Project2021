
import React from 'react'
import './shared/css/Global.css'
import { Routes } from './routes/Routes'
import { DesktopNavigation } from './components/navigation/desktopnavigation/DesktopNavigation'

function App(): JSX.Element {
  return (
    <Routes>
        <DesktopNavigation />
    <Routes/>
  );
}

export default App;
