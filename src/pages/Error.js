import Header from "../components/Header"

import '../css/error.css';

function Error() {
  return (
    <>
      <Header type="1000000000000000" />
      <div className="error">
        <img src={require(`../assets/img/admin_char.svg`).default} className="admin_char" alt="관리자 캐릭터" />
        <span className="large_title_24">
          페이지 준비 중입니다.
        </span>
      </div>
    </>
  );
}

export default Error;
