import Header from "../components/Header";

import { HealthNoteSection } from '../style/HealthNote.styles.js';

function HealthNote() {
  return (
    <>
      <Header title="헬스 노트" type="0010000000110000" />
      <HealthNoteSection>
        <section className="mealPlan">
          <div className="link_box">
            <span className="popup_title_20">오늘의 식단</span>
            <div className="icon">
              <img src={require(`../assets/img/link_icon.svg`).default} alt="이동 화살표" />
            </div>
          </div>
        </section>
      </HealthNoteSection>
    </>
  );
}

export default HealthNote;
