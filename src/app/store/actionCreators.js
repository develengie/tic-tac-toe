import { combinationSlice } from './slices/combinationSlice';

export const setSymbols = symbols => dispatch => {
    dispatch(combinationSlice.actions.checkSymbols(symbols));
};

export const setPlayer = player => dispatch => {
    dispatch(combinationSlice.actions.checkSymbols(player));
};

export const setGameOver = status => dispatch => {
    dispatch(combinationSlice.actions.checkSymbols(status));
};

export const createNewGame = initialSymbols => dispatch => {
    dispatch(combinationSlice.actions.configureNewGame(initialSymbols));
};
