import React, { useState } from 'react';
import '../../css/ToggleBtn.css';

const ToggleBtn = ({
    text,
    toggleColor = 'green', // 컬러 - green / red
    disabled = false
}) => {
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
        setIsActive(!isActive);
        console.log('토글 상태 ::::::', !isActive ? 'ON' : 'OFF');
    };

    return (
        <div className="toggle_box">
            <span className="toggle_label">{text}</span>
            <label className={`switch ${disabled ? 'disabled' : ''}`}>
                <input
                    type="checkbox"
                    checked={isActive}
                    onChange={handleToggle}
                    disabled={disabled}
                />
                <span className={`toggle ${toggleColor}`}></span>
            </label>
        </div>
    );
};

export default ToggleBtn;
