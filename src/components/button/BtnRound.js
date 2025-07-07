import React from 'react';
import '../../css/Button.css';

const BtnRound = ({
    btnText, //버튼 텍스트
    disabled = false,
    onClick,
}) => {
    const btnClassNames = [
        'btn',
        'BtnRound',
        disabled ? 'btn_disabled' : '',
    ].join(' ');

    return (
        <button className={btnClassNames} onClick={onClick} disabled={disabled}>
            <span className='texts'>{btnText}</span>
        </button>
    );
};

export default BtnRound;
