import { createSlice } from '@reduxjs/toolkit';

const initialState = "";

export const pathSlice = createSlice({
    name: 'path',
    initialState,
    reducers: {
        setPath: (state, action) => {
            return action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setPath } = pathSlice.actions;

export default pathSlice.reducer;