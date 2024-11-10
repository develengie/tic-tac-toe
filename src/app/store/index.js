import { combineReducers, configureStore } from '@reduxjs/toolkit';
import combinationReducer from './slices/combinationSlice';

const rootReducer = combineReducers({
    combination: combinationReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
