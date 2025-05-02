
import style from "./information.module.css";
import PropTypes from 'prop-types';


const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => (
    <>
        <h1>Крестики-нолики</h1>
            <div className={style.gameInfo}>
                {isDraw ? <div className={style.draw}>Ничья</div> : null}
                {isDraw === false && isGameEnded ? <div className={style.playerTurn}><span className={isGameEnded && currentPlayer === 'O' ? style.cellO : style.cellX}>{`Победа: ${currentPlayer}`}</span></div> : null}
                {isDraw === false && isGameEnded === false ? <div className={style.playerTurn}>Ходит: <span className={currentPlayer === 'O' ? style.cellO : style.cellX}>{currentPlayer}</span></div> : null}
            </div>
    </>
    
);

InformationLayout.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
};
  

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {

    return (
        <>
        <InformationLayout isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>
        </>
    )
};

Information.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
};