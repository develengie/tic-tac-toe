import React from 'react';
import './board.scss';
import Square from '../square/square';

const Board = ({ symbols, changeSymbol }) => {
    return (
        <div className="board">
            <div className="board__line">
                <Square
                    symbol={symbols[0]}
                    position={0}
                    onChange={changeSymbol}
                />
                <Square
                    symbol={symbols[1]}
                    position={1}
                    onChange={changeSymbol}
                />
                <Square
                    symbol={symbols[2]}
                    position={2}
                    onChange={changeSymbol}
                />
            </div>
            <div className="board__line">
                <Square
                    symbol={symbols[3]}
                    position={3}
                    onChange={changeSymbol}
                />
                <Square
                    symbol={symbols[4]}
                    position={4}
                    onChange={changeSymbol}
                />
                <Square
                    symbol={symbols[5]}
                    position={5}
                    onChange={changeSymbol}
                />
            </div>
            <div className="board__line">
                <Square
                    symbol={symbols[6]}
                    position={6}
                    onChange={changeSymbol}
                />
                <Square
                    symbol={symbols[7]}
                    position={7}
                    onChange={changeSymbol}
                />
                <Square
                    symbol={symbols[8]}
                    position={8}
                    onChange={changeSymbol}
                />
            </div>
        </div>
    );
};

export default Board;
