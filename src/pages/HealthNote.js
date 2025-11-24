import Header from "../components/Header";

import { HealthNoteSection } from '../style/HealthNote.styles.js';

function HealthNote() {
  return (
    <>
      <Header title="헬스 노트" type="0010000000110000" />
      <HealthNoteSection>
        <section className="section record">
          <div className="link_box sb">
            <span className="popup_title_20">오늘의 운동</span>
            <div className="icon_box">
              <div className="icon">
                <img src={require(`../assets/img/plus_green_icon.svg`).default} alt="추가" />
              </div>
              <div className="icon">
                <img src={require(`../assets/img/downloadFile_green_icon.svg`).default} alt="추가" />
              </div>
            </div>
          </div>

          <article className="record_list">
            <ul>
              <li>
                <div className="title">
                  <span className="num body_16_bold">1</span>
                  <span className="body_16">어깨 - 오버헤드 프레스 3세트</span>
                </div>
                <div className="value">
                  <span className="body_16">6 kg x 8회</span>
                  <span className="number_16">144 kg</span>
                </div>
              </li>
              <li>
                <div className="title">
                  <span className="num body_16_bold">2</span>
                  <span className="body_16">어깨 - 오버헤드 프레스 3세트</span>
                </div>
                <div className="value">
                  <span className="body_16">6 kg x 8회</span>
                  <span className="number_16">144 kg</span>
                </div>
              </li>
              <li>
                <div className="title">
                  <span className="num body_16_bold">3</span>
                  <span className="body_16">어깨 - 오버헤드 프레스 3세트</span>
                </div>
                <div className="value">
                  <span className="body_16">6 kg x 8회</span>
                  <span className="number_16">144 kg</span>
                </div>
              </li>
            </ul>
          </article>
        </section>
        <section className="section mealPlan">
          <div className="link_box sb">
            <span className="popup_title_20">오늘의 식단</span>
            <div className="icon_box">
              <div className="icon">
                <img src={require(`../assets/img/plus_green_icon.svg`).default} alt="추가" />
              </div>
            </div>
          </div>

          <article className="list t1 mealPlan_list">
            <ul>
              <li>
                <div className="img_box">
                  <img src={require(`../assets/img/blank_img.jpg`)} alt="빈 이미지" />
                </div>
                <div className="text_box">
                  <div className="time">
                    <div className="title body_16_bold">아침</div>
                    <div className="detail caption_12">오전 9시 10분</div>
                  </div>
                  <div className="meal caption_12_medium">
                    바나나 1개, 두유 1개
                  </div>
                </div>
              </li>
              <li>
                <div className="img_box">
                  <img src={require(`../assets/img/blank_img.jpg`)} alt="빈 이미지" />
                </div>
                <div className="text_box">
                  <div className="time">
                    <div className="title body_16_bold">점심</div>
                    <div className="detail caption_12">오전 12시</div>
                  </div>
                  <div className="meal caption_12_medium">
                    바나나 1개, 두유 1개, 단무지 100개, 치킨 1개, 아메리카노 1잔, 쿠키 1개, 밥 1개, 주스 1개
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </HealthNoteSection>
    </>
  );
}

export default HealthNote;
