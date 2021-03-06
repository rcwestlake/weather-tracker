import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory, hashHistory } from 'react-router'
import React from 'react'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Routes from './routes'
import reducer from './reducers'

import '../styles/index.scss'

const middleware = [thunk]

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancers, applyMiddleware(...middleware))

render(
  <Provider store={store}>
    <Routes history={hashHistory} />
  </Provider>,
  document.getElementById('root')
)
