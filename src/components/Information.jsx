
const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => (
    <>
        <h1>Крестики-нолики</h1>
            <div className="game-info">
                {isDraw ? <div className="draw">Ничья</div> : null}
                {isDraw === false && isGameEnded ? <div className="win"><span className={isGameEnded && currentPlayer === 'O' ? "current-player cell-o" : "current-player cell-x"}>{`Победа: ${currentPlayer}`}</span></div> : null}
                {isDraw === false && isGameEnded === false ? <div className="player-turn">Ходит: <span className={currentPlayer === 'O' ? "current-player cell-o" : "current-player cell-x"}>{currentPlayer}</span></div> : null}
            </div>
    </>
    
);

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {

    return (
        <>
        <InformationLayout isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>
        </>
    )
};