import Header from "../components/Header"

import { ErrorSection } from '../style/Error.styles.js';

function Error() {
  return (
    <>
      <Header type="1000000000000000" />
      <ErrorSection>
        <img src={require(`../assets/img/admin_char.svg`).default} className="admin_char" alt="관리자 캐릭터" />
        <span className="large_title_24">
          페이지 준비 중입니다.
        </span>
      </ErrorSection>
    </>
  );
}

export default Error;
