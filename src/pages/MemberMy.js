import { Link } from 'react-router-dom';

import Header from "../components/Header.js";
import CustomLink1 from '../components/link/CustomLink1.js';

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
              <figure>
                <img src={require(`../assets/img/pencil_icon.svg`).default} alt="수정 아이콘" />
                <figcaption className="caption_12">수정</figcaption>
              </figure>
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

        <section className="section function">
          <h4 className="caption_13_semibold">기능</h4>
          <ul>
            <li>
              <CustomLink1 
                to="/error"
                iconSrc="/img/my/setting.svg"
                text="계정 관리"
              />
            </li>
            <li>
              <CustomLink1 
                to="/error"
                iconSrc="/img/my/calendar.svg"
                text="스케줄 관리"
              />
            </li>
          </ul>
        </section>

        <section className="section setting">
          <h4 className="caption_13_semibold">설정</h4>
          <ul>
            <li>
              <CustomLink1 
                to="/error"
                iconSrc="/img/my/bellRing.svg"
                text="알림 설정"
              />
            </li>
            <li>
              <CustomLink1 
                to="/error"
                iconSrc="/img/my/headphones.svg"
                text="고객센터"
              />
            </li>
          </ul>
        </section>
      </MemberMySection>
    </>
  );
}

export default MemberMy;
