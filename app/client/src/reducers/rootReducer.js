import { combineReducers } from 'redux';
import logsReducer from './logsReducer';
import servicesReducer from './servicesReducer';
import trainerReducer from './trainerReducer';

export default combineReducers({
    logs: logsReducer,
    services: servicesReducer,
    trainer: trainerReducer,
})