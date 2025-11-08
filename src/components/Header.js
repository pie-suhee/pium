import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import CustomSelect from './select/CustomSelect';

import { HeaderSection } from '../style/Header.styles.js';

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

  useEffect(() => {
    setButtons(type);
  }, [type]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const gymOptions = [
  { value: 'option1', label: '강남 헬스장' },
  { value: 'option2', label: '송파 헬스장' },
];

  return (
    <HeaderSection>
      <header>
        <div className='left'>
          {buttons[0] === '1' && (
            <button className='headerBtn' onClick={handleGoBack}>
              <img src="/img/header/prevBtn.svg" alt="이전 아이콘" />
            </button>
          )}

          {buttons[1] === '1' && (
            <CustomSelect
              options={gymOptions}
              onChange={(option) => console.log('선택된 값:', option.value)}
            />
          )}
        </div>

        <div className='mid'>
          {buttons[2] === '1' && (
            <span className='headerBtn body_18_semibold'>{title}</span>
          )}
        </div>

        <div className='right'>
          {buttons[4] === '1' && (
            <Link to="/error" className='headerBtn taBtn'>
              <div className='taBtn'>
                <span className='caption_12_medium'>둘러볼래요</span>
                <img src="/img/header/rightArrowBtn.svg" alt="오른쪽 화살표 아이콘" />
              </div>
            </Link>
          )}

          {buttons[5] === '1' && (
            <Link to="/error" className='headerBtn'>
              <div className='taBtn'>
                <span className='caption_12_medium'>문의하기</span>
                <img src="/img/header/rightArrowBtn.svg" alt="오른쪽 화살표 아이콘" />
              </div>
            </Link>
          )}

          {buttons[6] === '1' && (
            <Link to="/error" className='headerBtn'>
              <img src="/img/header/pencilBtn.svg" alt="연필 아이콘" />
            </Link>
          )}

          {buttons[7] === '1' && (
            <Link to="/error" className='headerBtn'>
              <img src="/img/header/plusBtn.svg" alt="추가 아이콘" />
            </Link>
          )}

          {buttons[8] === '1' && (
            <Link to="/error" className='headerBtn'>
              <img src="/img/header/searchBtn.svg" alt="검색 아이콘" />
            </Link>
          )}

          {buttons[9] === '1' && (
            <Link to="/error" className='headerBtn'>
              <img src="/img/header/fileBoxBtn.svg" alt="파일함 아이콘" />
            </Link>
          )}

          {buttons[10] === '1' && (
            <Link to="/error" className='headerBtn'>
              <img src="/img/header/chartBtn.svg" alt="차트 아이콘" />
            </Link>
          )}
          
          {buttons[11] === '1' && (
            <Link to="/error" className='headerBtn'>
              <img src="/img/header/settingBtn.svg" alt="설정 아이콘" />
            </Link>
          )}

          {buttons[12] === '1' && (
            <Link to="/error" className='headerBtn'>
              <img src="/img/header/menuBtn.svg" alt="메뉴 아이콘" />
            </Link>
          )}

          {buttons[13] === '1' && (
            <Link to="/error" className='headerBtn'>
              <span className='greenText'>완료</span>
            </Link>
          )}

          {buttons[14] === '1' && (
            <Link to="/error" className='headerBtn'>
              <span className='greenText'>삭제</span>
            </Link>
          )}

          {buttons[15] === '1' && (
            <Link to="/error" className='headerBtn'>
              <img src="/img/header/alarmOffBtn.svg" alt="알람 아이콘" />
            </Link>
          )}
        </div>
      </header>
    </HeaderSection>
  );
};

export default Header;