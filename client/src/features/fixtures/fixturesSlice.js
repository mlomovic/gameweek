import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        team1: {
            name: 'Crystal Palace',
            shortName: 'Cry',
            logoUrl: 'https://resources.premierleague.com/premierleague/badges/25/t31.png'
        },
        team2: {
            name: 'Arsenal',
            shortName: 'Ars',
            logoUrl: 'https://resources.premierleague.com/premierleague/badges/25/t3.png'
        }
    },
    {
        team1: {
            name: 'Fulham',
            shortName: 'Ful',
            logoUrl: 'https://resources.premierleague.com/premierleague/badges/25/t54.png'
        },
        team2: {
            name: 'Liverpool',
            shortName: 'Liv',
            logoUrl: 'https://resources.premierleague.com/premierleague/badges/25/t14.png'
        }
    }
];

export const fixturesSlice = createSlice({
    name: 'fixtures',
    initialState,
    reducers: {
        setFixtures: (state, action) => {
            state = [...action.payload]
        }
    }
});

// Action creators are generated for each case reducer function
export const { setFixtures } = fixturesSlice.actions;

export default fixturesSlice.reducer;