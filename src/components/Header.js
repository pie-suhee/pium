import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../css/Header.css';

const Header = ({ title, type }) => {
  /* 
    0: 이전버튼
    1: 타이틀 select (왼쪽)
    2: 타이틀
    3: 타이틀 select (가운데)
    4: 둘러볼래요
    5: 문의하기
    6: 편집
    7: 추가
    8: 검색
    9: 파일함
    10: 차트
    11: 환경설정
    12: 메뉴
    13: 완료
    14: 삭제
    15: 알람
  */

  const [buttons, setButtons] = useState([]);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const toggleSelectOpen = () => setIsSelectOpen((prev) => !prev);


  useEffect(() => {
    setButtons(type);
  }, [type]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <header>
      <div className='left'>
        {buttons[0] === '1' && (
          <button className='headerBtn' onClick={handleGoBack}>
            <img src="/img/header/prevBtn.svg" alt="이전 아이콘" />
          </button>
        )}

        {buttons[1] === '1' && (
          <></>
        )}
      </div>

      <div className='mid'>
        <span className={`headerBtn body_18 ${buttons[2] === '1' ? 'on' : ''}`}>{title}</span>
      </div>

      <div className='right'>
        <Link to="/" className={`headerBtn taBtn ${buttons[4] === '1' ? 'on' : ''}`}>
          <div className='taBtn'>
            <span className='caption_12_medium'>둘러볼래요</span>
            <img src="/img/header/rightArrowBtn.svg" alt="오른쪽 화살표 아이콘" />
          </div>
        </Link>

        <Link to="/" className={`headerBtn ${buttons[5] === '1' ? 'on' : ''}`}>
          <div className='taBtn'>
            <span className='caption_12_medium'>문의하기</span>
            <img src="/img/header/rightArrowBtn.svg" alt="오른쪽 화살표 아이콘" />
          </div>
        </Link>

        <Link to="/" className={`headerBtn ${buttons[6] === '1' ? 'on' : ''}`}>
          <img src="/img/header/pencilBtn.svg" alt="연필 아이콘" />
        </Link>

        <Link to="/" className={`headerBtn ${buttons[7] === '1' ? 'on' : ''}`}>
          <img src="/img/header/plusBtn.svg" alt="추가 아이콘" />
        </Link>

        <Link to="/" className={`headerBtn ${buttons[8] === '1' ? 'on' : ''}`}>
          <img src="/img/header/searchBtn.svg" alt="검색 아이콘" />
        </Link>

        <Link to="/" className={`headerBtn ${buttons[9] === '1' ? 'on' : ''}`}>
          <img src="/img/header/fileBoxBtn.svg" alt="파일함 아이콘" />
        </Link>

        <Link to="/" className={`headerBtn ${buttons[10] === '1' ? 'on' : ''}`}>
          <img src="/img/header/chartBtn.svg" alt="차트 아이콘" />
        </Link>

        <Link to="/" className={`headerBtn ${buttons[11] === '1' ? 'on' : ''}`}>
          <img src="/img/header/settingBtn.svg" alt="설정 아이콘" />
        </Link>

        <Link to="/" className={`headerBtn ${buttons[12] === '1' ? 'on' : ''}`}>
          <img src="/img/header/menuBtn.svg" alt="메뉴 아이콘" />
        </Link>

        <Link to="/" className={`headerBtn ${buttons[13] === '1' ? 'on' : ''}`}>
          <span className='greenText'>완료</span>
        </Link>

        <Link to="/" className={`headerBtn ${buttons[14] === '1' ? 'on' : ''}`}>
          <span className='greenText'>삭제</span>
        </Link>

        <Link to="/" className={`headerBtn ${buttons[15] === '1' ? 'on' : ''}`}>
          <img src="/img/header/alarmOffBtn.svg" alt="알람 아이콘" />
        </Link>
      </div>
    </header>
  );
};

export default Header;