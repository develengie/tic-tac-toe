import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    symbols: ['', '', '', '', '', '', '', '', ''],
    player: 'cross',
    gameOver: false,
};

export const combinationSlice = createSlice({
    name: 'combination',
    initialState,
    reducers: {
        checkSymbols(state, action) {
            switch (typeof action.payload) {
                case 'object':
                    return { ...state, symbols: action.payload };

                case 'string':
                    return { ...state, player: action.payload };

                case 'boolean':
                    return { ...state, gameOver: action.payload };

                default:
                    return state;
            }
        },
        configureNewGame(state, action) {
            state.symbols = action.payload;
            state.player = 'cross';
            state.gameOver = false;
        },
    },
});

export default combinationSlice.reducer;
