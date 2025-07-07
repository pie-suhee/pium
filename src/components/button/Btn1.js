import React from 'react';
import '../../css/Button.css';

const Button = ({
    btnText, //버튼 텍스트
    type = 'line', // 버튼타입 - fill | line | gray
    bgColor = 'green', // 버튼배경색 -  green | black | gray | black800
    color = "black", // 버튼 텍스트 컬러 -  black | white | text-primary-white
    size = 'full', // 버튼 사이즈 - full | half
    icon = null,
    disabled = false,
    onClick,
}) => {
    const btnClassNames = [
        'btn',
        `btn_${type}`,
        `btn_${bgColor}`,
        `btn_txt_${color}`,
        `btn_${size}`,
        disabled ? 'btn_disabled' : '',
    ].join(' ');

    return (
        <button className={btnClassNames} onClick={onClick} disabled={disabled}>
            {icon && <span className="btn_icon">{icon}</span>}
            <span className='texts'>{btnText}</span>
        </button>
    );
};

export default Button;
