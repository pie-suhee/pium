import { useState, useEffect, Children } from 'react';
import { PopupSection } from '../../style/Popup.styles.js';

const BottomPopup = ({ code, children }) => {
    /* 
        0: 토글 on/off
        1: 팝업 푸터
    */

    const content = Children.toArray(children).find(
        (child) => child.type.displayName === 'BottomPopupContent'
    );

    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        setButtons(code);
    }, [code]);

    return (
        <PopupSection>
            <div className="popupBack"></div>
            
            <div className="bottomPopup">
                {buttons[0] === '1' && (
                    <button className="toggleSlide">
                        <div className="slideLine"></div>
                    </button>
                )}

                <div className="bottom-popup-content">
                    {content}
                </div>

                {buttons[1] === '1' && (
                    <div className="popupFooter">
                        <div className="footerLine"></div>
                    </div>
                )}
            </div>
        </PopupSection>
    );
};

// Slot 컴포넌트
const BottomPopupContent = ({ children }) => <>{children}</>;
BottomPopupContent.displayName = 'BottomPopupContent';

// Slot 연결
BottomPopup.Content = BottomPopupContent;

export default BottomPopup;