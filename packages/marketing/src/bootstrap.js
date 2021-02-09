console.log('Hi There from Marketing Bootstrap')
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

// Mount function to start APP

const mount = (el) => {
  ReactDom.render(<App />, el)
}

// If Development mount immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing-dev-root')
  if (el) {
    mount(el)
  }
}

// Else running through container, export Mount function
export { mount }
