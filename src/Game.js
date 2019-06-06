import React from 'react';
import Board from './Board';
import './App.css';

class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            cells: Array(9).fill(null),
            stepCounter: 0,
            whoNext: 'X',
            winner: null
        }
    }

    handleClick = (index) => {
        let {cells, whoNext, stepCounter, winner} = this.state;
        cells = [...cells];
        if (cells[index] || winner) {
            return;
        }
        cells[index] = whoNext;
        getWinner(cells);
        whoNext = whoNext === "X" ? 'O' : "X";
        stepCounter = stepCounter + 1;
        winner = getWinner(cells);

        this.setState({
            cells,
            whoNext,
            stepCounter,
            winner
        })
    }

    resetGame = () => {
        this.setState({
            cells: Array(9).fill(null),
            stepCounter: 0,
            whoNext: 'X',
            winner: null
        })
    }

    render() {
        const {cells, whoNext, winner, stepCounter} = this.state;
        let gameStatus;
        if (winner) {
            gameStatus = `Player ${winner} wins!`;
        } else if (stepCounter === 9) {
            gameStatus = 'It is a DRAW!'
        } else {
            gameStatus = `Player ${whoNext}, your turn! `
        }
        return (
            <div className="Game">
                <h1> Tic Tac Toe, step: {stepCounter} </h1>
                <h3> {gameStatus}</h3>
                <button onClick={this.resetGame}> Reset</button>
                <Board cells={cells} onCellClicked={this.handleClick}/>
            </div>
        );
    }
}

function getWinner(cells) {
    const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const [winCombo] = winLines.filter(combo => {
        let [a, b, c] = combo;
        return cells[a] && cells[a] === cells[b] && cells[b] === cells[c];
    });

    if (winCombo) {
        return cells[winCombo[0]];
    } else {
        return null;
    }

}


export default Game;
