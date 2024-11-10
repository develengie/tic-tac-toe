import React from 'react';
import './startNewGameButton.scss';

const StartNewGameButton = ({ startNewGame }) => {
    return (
        <button
            className="startNewGameButton"
            type="button"
            onClick={() => startNewGame()}
        >
            Start new game
        </button>
    );
};

export default StartNewGameButton;
