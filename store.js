import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


export const initStore = (reducers, initialState, isServer) => {

  if (isServer && typeof window === 'undefined') {

    return createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
  }else {

    if (!window.store) {
      window.store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
    }

    return window.store
  }
}