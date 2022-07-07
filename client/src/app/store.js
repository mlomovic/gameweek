import { configureStore } from '@reduxjs/toolkit';
import pathReducer from '../features/path/pathSlice';
import fixturesReducer from '../features/fixtures/fixturesSlice';
import predictionsReducer from '../features/predictions/predictionsSlice';
import detailsReducer from '../features/details/detailsSlice';

export const store = configureStore({
    reducer: {
        path: pathReducer,
        fixtures: fixturesReducer,
        predictions: predictionsReducer,
        details: detailsReducer
    }
});