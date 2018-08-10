import { combineReducers } from 'redux'
import reducer from './reducer'
import posts from './posts'

export default combineReducers({ reducer, posts })