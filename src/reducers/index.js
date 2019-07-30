import { combineReducers } from 'redux'
import counter from './counter'

//合并所有的redux成一个完整的redux
export default combineReducers({
  counter
})
