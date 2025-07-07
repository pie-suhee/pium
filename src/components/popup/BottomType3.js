import { useState, useEffect } from 'react';
// import Btns1 from "../button/Btn1";

const BottomType3 = ({ type }) => {
    /* 
        0: 토글 on/off
        1: 팝업 푸터
    */

    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        setButtons(type);
    }, [type]);

    return (
        <>
            <button className={`toggleSlide ${buttons[0] === '1' ? 'on' : ''}`}>
                <div className='slideLine'></div>
            </button>

            <div className='contents'>
                <div className='bottomType3'>
                </div>
            </div>

            <div className={`popupFooter ${buttons[1] === '1' ? 'on' : ''}`}>
                <div className='footerLine'></div>
            </div>
        </>
    );
};

export default BottomType3;