
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            let { fixtureKey, details } = { ...action.payload }
            state[fixtureKey] = details;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setDetails } = detailsSlice.actions;

export default detailsSlice.reducer;