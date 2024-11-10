import React from 'react';
import './square.scss';

const Square = ({ symbol, position, onChange }) => {
    return (
        <div
            className={`square ${symbol}`}
            onClick={() => onChange(position)}
        />
    );
};

export default Square;
