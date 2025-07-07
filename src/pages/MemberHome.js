import Header from "../components/Header"

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
    </>
  );
}

export default MemberHome;
