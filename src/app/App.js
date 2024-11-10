import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from './components/board/board';
import StartNewGameButton from './components/startNewGameButton/startNewGameButton';
import {
    setSymbols,
    setPlayer,
    setGameOver,
    createNewGame,
} from './store/actionCreators';

function App() {
    const dispatch = useDispatch();
    const { symbols, player, gameOver } = useSelector(
        state => state.combination
    );

    useEffect(() => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const comb of winningCombinations) {
            if (
                symbols[comb[0]] === 'cross' &&
                symbols[comb[1]] === 'cross' &&
                symbols[comb[2]] === 'cross'
            ) {
                dispatch(setGameOver(true));
                setTimeout(function () {
                    alert('Player ✕ wins!');
                }, 50);
            }

            if (
                symbols[comb[0]] === 'circle' &&
                symbols[comb[1]] === 'circle' &&
                symbols[comb[2]] === 'circle'
            ) {
                dispatch(setGameOver(true));
                setTimeout(function () {
                    alert('Player ◯ wins!');
                }, 50);
            }
        }
    }, [symbols]);

    function changeSymbol(position) {
        const newSymbols = [...symbols];

        if (newSymbols[position] === '' && !gameOver) {
            newSymbols[position] = player;

            dispatch(setSymbols(newSymbols));
            dispatch(setPlayer(player === 'cross' ? 'circle' : 'cross'));
        }

        if (gameOver) {
            alert('Please start new game.');
        }
    }

    function startNewGame() {
        const initialSymbols = ['', '', '', '', '', '', '', '', ''];
        dispatch(createNewGame(initialSymbols));
    }

    return (
        <>
            <Board symbols={symbols} changeSymbol={changeSymbol} />
            <StartNewGameButton startNewGame={startNewGame} />
        </>
    );
}

export default App;
