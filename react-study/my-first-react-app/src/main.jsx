import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ListApp from './ListApp.jsx'
import Fruit from './Fruit.jsx'
import Gretting from './Gretting.jsx'
import EventApp from './EventApp.jsx'
import ReducerApp from './useHook/reducer/ReducerApp.jsx'
import RefApp from './useHook/ref/RefApp.jsx'
import EffectApp from './useHook/effet/EffectApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EffectApp/>
  </StrictMode>
)
