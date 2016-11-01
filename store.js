import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

export const initStore = (reducers, initialState, isServer) => {

  if (isServer && typeof window === 'undefined') {

    return createStore(reducers, initialState, applyMiddleware(thunk))
  }else {

    if (!window.store) {
      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      window.store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))
    }

    return window.store
  }
}