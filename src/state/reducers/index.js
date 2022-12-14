import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import statusReducer from './statusReducer';
 const reducers = combineReducers({
    users:usersReducer,
    notification:statusReducer
})
export default reducers