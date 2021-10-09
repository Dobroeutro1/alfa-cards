import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'
import { actionFn } from './utils'
import { Provider } from 'react-redux'
import * as containers from './containers'

const store = applyMiddleware(actionFn)(createStore)(reducer)

console.log(store.getState())

if (document.getElementById('sidebar')) {
  ReactDOM.render(
    <Provider store={store}>
      <containers.SidebarContainer />
    </Provider>,
    document.getElementById('sidebar')
  )
}

if (document.getElementById('card-list')) {
  ReactDOM.render(
    <Provider store={store}>
      <containers.DogsContainer />
    </Provider>,
    document.getElementById('card-list')
  )
}
