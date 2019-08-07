    
import { combineReducers } from 'redux';

import { error } from './error';
import { loading } from './loading';
import { companies } from './companies';

const rootReducer = combineReducers({
    loading,
    error,
    companies
});

export default rootReducer;