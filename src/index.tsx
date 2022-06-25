import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <App />
      </Container>
    </BrowserRouter>
  </Provider>
)
