import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
/** it will warn us if we acccidently mutate any state */
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
export default function configureStore(initialState) {
    /** add support for redux dev tools */
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    )
}
