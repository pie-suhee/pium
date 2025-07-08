import { useState } from 'react';

const CustomSelect = ({ options, onChange }) => {
    const [selected, setSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
        onChange(option);
    };

    const dropdownIcon = open
                        ? require('../../assets/img/dropdown_off_icon.svg').default
                        : require('../../assets/img/dropdown_on_icon.svg').default;

    return (
        <div className="custom-select-container">
            <div className="custom-select-selected" onClick={() => setOpen(!open)}>
                {selected.label}
                <div className="arrow">
                    <img src={dropdownIcon} alt="드롭다운 아이콘" />
                </div>
            </div>

            <ul className={`custom-select-options ${open ? 'open' : ''}`}>
                {options.map((opt, i) => (
                    <li key={i} onClick={() => handleSelect(opt)}>
                        {opt.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomSelect;