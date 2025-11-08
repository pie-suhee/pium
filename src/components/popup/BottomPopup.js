import { PopupSection } from '../../style/Popup.styles.js';

import BottomType1 from './BottomType1';
import BottomType2 from './BottomType2';
import BottomType3 from './BottomType3';

const BottomPopup = ({ type, text, code }) => {
    const renderContent = () => {
        switch (type) {
            case "1":
                return <BottomType1 title={text} type={code} />;
            case "2":
                return <BottomType2 title={text} type={code} />;
            case "3":
                return <BottomType3 type={code} />;
            default:
                return null;
        }
    };

    return (
        <PopupSection>
            <div className='popupBack'></div>
            
            <div className='bottomPopup'>
                {renderContent()}
            </div>
        </PopupSection>
    );
};

export default BottomPopup;