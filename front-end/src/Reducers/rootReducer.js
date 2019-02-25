import{combineReducers} from 'redux'
import postsReducer from './postsReducer.js'


const RootReducer = combineReducers({
  postsReducer: postsReducer
})

export default RootReducer
