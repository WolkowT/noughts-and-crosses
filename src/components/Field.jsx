
import style from "./field.module.css";
import PropTypes from 'prop-types';

const FieldLayout = ({ field, click, isGameEnded }) => (
    <>
        <div className={style.gameBoard}>
            {field.map((item, index) => (
                <button className={item === 'X' ? 'cell cell-x' : 'cell cell-o'} key={index} id={index} onClick={click} disabled={item !== '' || isGameEnded ? true : false}>{item}</button>
            ))}
        </div>
    </>
);

FieldLayout.propTypes = {
    field: PropTypes.array,
    click: PropTypes.func,
    isGameEnded: PropTypes.bool
};
  

export const Field = ({ field, click, isGameEnded }) => {


    return (
        <>
        <FieldLayout field={field} click={click} isGameEnded={isGameEnded}/>
        </>
    )
};

Field.propTypes = {
    field: PropTypes.array,
    click: PropTypes.func,
    isGameEnded: PropTypes.bool
};