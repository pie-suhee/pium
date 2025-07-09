import Header from "../components/Header"
import DropPanel from "../components/select/DropPanel"

import '../css/MemberHome.css';

function MemberHome() {
  return (
    <>
      <Header title="멘트" type="0100000000000001" />
      <section className="mainBanner">
        <div className="text_box">
          <div className="text_t1">
            운동 시작한지 30일차
          </div>
          <div className="text_t2">
            오늘 하루도<br />
            활기차게 시작해요!
          </div>
        </div>

        <div className="img_box">
          <img src={require(`../assets/img/member/home/member_char.svg`).default} alt="회원 캐릭터" />
        </div>
      </section>
      <section className="memberShip">
        <DropPanel>
          <DropPanel.Header>
            <div className="header-content">
              <div className="member">
                <div className="name body_16_bold">김지우</div>
                <div className="tag_box">
                  <span className="tag type1">11PT</span>
                  <span className="tag type2">12개월 프리패스</span>
                </div>
              </div>
              <div className="date caption_12">2025.1.22 ~ 2026.1.22</div>
            </div>
          </DropPanel.Header>

          <DropPanel.Content>
            <div className="info-row">
              <span className="index">담당 트레이너</span>
              <span>정민아</span>
            </div>
            <div className="info-row">
              <span className="index">잔여 일수</span>
              <div className="date">
                <span className="green">202일</span>
                <span>/</span>
                <span>총 365일</span>
              </div>
            </div>
            <div className="info-row">
              <span className="index">잔여 횟수</span>
              <span>무제한</span>
            </div>
          </DropPanel.Content>
        </DropPanel>
      </section>
    </>
  );
}

export default MemberHome;
