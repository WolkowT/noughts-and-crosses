import { useState } from 'react';
import { Field } from './components/Field';
import { Information } from './components/Information';
import PropTypes from 'prop-types';


const GameLayout = ({ currentPlayer, isGameEnded, isDraw, field, click, newGame }) => (
  <>
    <Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>
    <Field field={field} click={click} isGameEnded={isGameEnded}/>
    <div className="game-controls">
            <button className="btn new-game" onClick={newGame}>Начать заново</button>
    </div>
  </>
);

GameLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  field: PropTypes.array,
  click: PropTypes.func,
  newGame: PropTypes.func
};

export const Game = () => {

  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ]);

  

  const click = (event) => {
    currentPlayer === 'O' ? setCurrentPlayer('X') : setCurrentPlayer('O');
    currentPlayer === 'O' ? event.target.className = 'cell cell-o' : event.target.className = 'cell cell-x';

    setField(
      field.map((item, index) => 
        index === Number(event.target.id) ? currentPlayer : item
      )
    );
    
  };

    
  const checkWin = (board, player) => {
    const WIN_PATTERNS = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
      [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
    ];
  
    return WIN_PATTERNS.some(pattern => 
      pattern.every(cell => board[cell] === player)
    );
  }

  const draw = (board) => {
    return board.every(cell => cell !== '') && !checkWin(board, 'X') && !checkWin(board, 'O');
  }

  if (checkWin(field, 'X')) {
    if (!isGameEnded) {
      setCurrentPlayer('X')
      setIsGameEnded(true)
    }
  } else if (checkWin(field, 'O')) {
    if (!isGameEnded) {
      setCurrentPlayer('O')
      setIsGameEnded(true)
    }
  } else if (draw(field)) {
    if (!isDraw) {
      setIsDraw(true)
    }
  }

  const newGame = () => {
    setField([
      '', '', '',
      '', '', '',
      '', '', '',
    ]);
    setCurrentPlayer('O');
    setIsGameEnded(false);
    setIsDraw(false);
  }


  return (
    <>
    <GameLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} field={field} click={click} newGame={newGame}/>
    </>
  )
};


