console.log('Hi There from Container Bootstrap')
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

ReactDom.render(<App />, document.querySelector('#_container-dev-root'))
