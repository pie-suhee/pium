import { Link } from 'react-router-dom';

import Header from "../components/Header.js";

import { MemberMySection } from '../style/MemberMy.styles.js';

function MemberMy() {
  return (
    <>
      <Header title="마이" type="0010000000000000" />
      <MemberMySection>
        <section className="section profile">
          <div className="detail_box">
            <div className="img_box">
              <img src={require(`../assets/img/member/home/member_char.svg`).default} alt="회원 캐릭터" />
            </div>
            <div className="name_box">
              <p className="user large_title_24">김지우</p>
              <p className="gym caption_14">서울 헬스장</p>
            </div>
          </div>

          <div className="mod_box">
            <Link to="/error">
              <img src={require(`../assets/img/pencil_icon.svg`).default} alt="수정 아이콘" />
              <span className="caption_12">수정</span>
            </Link>
          </div>
        </section>

        <section className="section status">
          <ul>
            <li className="remain">
              <Link to="/error">
                <div className="num number_26">2</div>
                <div className="txt caption_12">남은 이용권</div>
              </Link>
            </li>

            <li className="complete">
              <Link to="/error">
                <div className="num number_26">15</div>
                <div className="txt caption_12">총 운동 기록</div>
              </Link>
            </li>

            <li className="cancel">
              <Link to="/error">
                <div className="num number_26">2</div>
                <div className="txt caption_12">취소/미루기</div>
              </Link>
            </li>
          </ul>
        </section>
      </MemberMySection>
    </>
  );
}

export default MemberMy;
