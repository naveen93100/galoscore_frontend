import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store.js'
import {Provider} from 'react-redux'
import {Toaster} from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='952734899638-hcle3f69p6gcgq4rp1389csij1qnu66h.apps.googleusercontent.com'>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <Toaster/>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
