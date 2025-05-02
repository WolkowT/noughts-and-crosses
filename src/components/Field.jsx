
const FieldLayout = ({ field, click, isGameEnded }) => (
    <>
        <div className="game-board">
            {field.map((item, index) => (
                <button className="cell" key={index} id={index} onClick={click} disabled={item !== '' || isGameEnded ? true : false}>{item}</button>
            ))}
        </div>
    </>
);

export const Field = ({ field, click, isGameEnded }) => {


    return (
        <>
        <FieldLayout field={field} click={click} isGameEnded={isGameEnded}/>
        </>
    )
};