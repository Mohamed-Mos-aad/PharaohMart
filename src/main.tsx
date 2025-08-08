// ** Style
import './index.css'
// ** App
import App from './App.tsx'
// ** Hooks && Tools
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import { Provider } from 'react-redux'
// ** Store
import { store } from './app/store.ts'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
)
