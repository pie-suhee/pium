import BottomPopup from "../components/popup/BottomPopup"

import { PopupSection } from '../style/Popup.styles.js';

function Popup() {
  return (
    <PopupSection>
      <BottomPopup type="2" code="111111"></BottomPopup>
    </PopupSection>
  );
}

export default Popup;