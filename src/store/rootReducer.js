import { combineReducers } from 'redux'
import auth from './auth/reducer'
import user from './user/reducer'
import app from './app/reducer'
const reducers = combineReducers({
    auth, user, app
})

export default reducers;