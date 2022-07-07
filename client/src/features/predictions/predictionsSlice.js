import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const predictionsSlice = createSlice({
    name: 'predictions',
    initialState,
    reducers: {
        predict: (state, action) => {
            let { fixtureKey, prediction } = { ...action.payload }
            state[fixtureKey] = prediction;
        }
    }
});

// Action creators are generated for each case reducer function
export const { predict } = predictionsSlice.actions;

export default predictionsSlice.reducer;