import { useState, useCallback, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../store/dateSlice.js';
import { useScheduleData } from "../hook/useScheduleData.js";
import { getMonthlyCalendarCells, formatDateKey } from '../utils/dateCalculations.js';
import { formatTimeWithAmPm, calculateDuration } from "../utils/timeUtils.js";
import Picker from "react-mobile-picker";

import Header from "../components/Header";
import BottomPopup from "../components/popup/BottomPopup"

import { HealthNoteSection } from '../style/HealthNote.styles.js';

// Picker에 넘겨 줄 년/월/일 배열 생성
const currentYear = new Date().getFullYear();
const selections = {
  year: Array.from({ length: 24 }, (v, i) => i + Number(currentYear) - 12),
  month: Array.from({ length: 12 }, (v, i) => i + 1),
};

function HealthNote() {
  const dispatch = useDispatch();

  // Redux에서 현재 연/월/일 정보 가져오기
  const { year, month, date, dayOfWeek, dateKey } = useSelector(state => state.date);
  
  // 컴포넌트 마운트 시점에 오늘 날짜로 강제 초기화
  useEffect(() => {
    const today = new Date();
    // getTime()으로 타임스탬프를 dispatch하여 오늘 날짜로 설정
    dispatch(setDate(today.getTime()));
  }, [dispatch])

  // 로컬 계산 로직 제거, Redux 상태와 유틸리티 함수 사용
  const calendarCells = getMonthlyCalendarCells(year, month);
  const todayKey = formatDateKey(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()); // 현재 날짜 키 (비교용)
  
  const [selectedDate, setSelectedDate] = useState(dateKey);
  const { selectedEvents, getEventCount } = useScheduleData(selectedDate);
    
  const handleDayClick = useCallback((dayOfMonth) => {
    // 1. 로컬 상태 업데이트 (달력 하이라이트용)
    const key = formatDateKey(year, month, dayOfMonth);
    setSelectedDate(key);
    
    // 2. Redux 상태 업데이트 (헤더 표시 및 다른 컴포넌트 동기화용)
    const newDate = new Date(year, month - 1, dayOfMonth);
    dispatch(setDate(newDate.getTime()));
  }, [year, month, dispatch]);

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  /* 달력 년/월 선택 S: */
  // 팝업 상태 관리
  const [showPopup, setShowPopup] = useState(false);

  // Picker에서 선택 중인 임시 값 (Redux와 분리)
  const [tempDate, setTempDate] = useState({ year, month });

  // Redux의 year/month가 변경되면 pickerValue도 업데이트 (팝업 다시 열 때 최신 상태 반영)
  useEffect(() => {
    setTempDate({ year, month });
    // Redux의 year/month가 변경되면 selectedDate도 해당 월의 1일로 변경 (혹은 기존 날짜 유지)
    // 여기서는 Redux에서 가져온 'date'를 기준으로 새 dateKey를 만들어 업데이트
    setSelectedDate(formatDateKey(year, month, date));
  }, [year, month, date]);

  // Picker 값 변경 핸들러
  const handlePickerChange = useCallback((newValue) => {
    setTempDate(newValue);
  }, []);

  // 팝업 열기 핸들러 (캘린더 헤더 클릭 시)
  const handleDateSelectClick = useCallback(() => {
    // 팝업을 열 때 현재 Redux 상태의 연/월로 임시 값 초기화
    setTempDate({ year: year, month: month });
    setShowPopup(true);
  }, [year, month]);

  // 팝업 '완료' 버튼 핸들러
  const handleDateConfirm = useCallback(() => {
    // Redux 상태의 일(date)을 유지하면서 휠 피커에서 선택된 년/월로 변경
    const fixedDay = 1;
    const newDate = new Date(tempDate.year, tempDate.month - 1, fixedDay);
    
    // [중요: 비-직렬화 오류 해결 유지] Date 객체 대신 타임스탬프(숫자) 전달
    dispatch(setDate(newDate.getTime())); 
    
    setShowPopup(false); 
  }, [tempDate, dispatch]);

  // 팝업 '취소' 버튼 핸들러
  const handleDateCancel = useCallback(() => {
    // 팝업만 닫기
    setShowPopup(false);
  }, []);
  /* 달력 년/월 선택 E: */

  return (
    <>
      <Header title="헬스 노트" type="0010000000110000" />
      <HealthNoteSection>
        <section className="section calendar">
          <div className="calendar-head">
            <div className="date popup_title_20">{`${month}월 ${date}일 ${week[dayOfWeek]}요일`}</div>
            <div className="date-select">
              <div className="text caption_14" onClick={handleDateSelectClick}>
                {`${year}년 ${month}월`}
              </div>
            </div>
          </div>

          <div className="calendar-popup">
            {showPopup && (
              <BottomPopup code="01" onClose={handleDateCancel}>
                <BottomPopup.Content>
                  <div className="change_date">
                    <Picker
                      value={tempDate} 
                      onChange={handlePickerChange} 
                      wheelMode="normal" 
                      className="custom-picker"
                    >
                      {Object.keys(selections).map((name) => (
                        <Picker.Column key={name} name={name}>
                          {selections[name].map((option) => (
                            <Picker.Item key={option} value={option}>
                              {({ selected }) => (
                                <div
                                  style={{
                                    backgroundColor: selected ? "white" : "#C4C4C4",
                                    padding: "5px 50px",
                                    borderRadius: "5px",
                                  }}
                                  >
                                  {option}
                                </div>
                              )}
                            </Picker.Item>
                          ))}
                        </Picker.Column>
                      ))}
                    </Picker>
                  </div>
                  <div className="close_btn">
                    <button className="body_16_bold cancel" onClick={handleDateCancel}>취소</button>
                    <button className="body_16_bold ok" onClick={handleDateConfirm}>완료</button>
                  </div>
                </BottomPopup.Content>
              </BottomPopup>
            )}
          </div>
          
          <div className="calendar-content">
            <div className="calendar-grid">
              {week.map((w) => (
                <div key={w} className="week caption_15_medium">{w}</div>
              ))}

              {calendarCells.map((dayOfMonth, index) => {
                if (dayOfMonth === null) {
                  return <div key={index} className="empty"></div>;
                }

                const key = formatDateKey(year, month, dayOfMonth);
                const count = getEventCount(key);
                const isSelected = key === selectedDate;
                const isPast = key < todayKey;

                return (
                  <div
                    key={index}
                    className={`day${isSelected ? " selected" : isPast ? " past" : ""}`}
                    onClick={() => handleDayClick(dayOfMonth)}
                  >
                    <span className="date-number number_13">{dayOfMonth}</span>
                    {count > 0 && <span className="badge number_8_medium">{count}</span>}
                  </div>
                );
              })}
            </div>

            <div className="calendar-events">
              <ul>
                {selectedEvents.map((ev, idx) => (
                  <li key={idx}>
                    <div className="startTime caption_14_bold">{formatTimeWithAmPm(ev.start)}</div>
                    <div key={idx} className="event_list">
                      <p className="title body_16_bold">{ev.title}</p>
                      <p className="time caption_14">
                        {ev.start} - {ev.end} ({calculateDuration(ev.start, ev.end)})
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section body">
          <div className="link_box sb">
            <span className="popup_title_20">신체 기록</span>
            <div className="icon_box">
              <div className="icon">
                <Link to="/error">
                  <img src={require(`../assets/img/plus_green_icon.svg`).default} alt="추가" />
                </Link>
              </div>
            </div>
          </div>

          <article className="body_list">
            <ul>
              <li>
                <div className="text body_16_bold">몸무게</div>
                <div className="weight">
                  <span className="base number_16">58.0 kg</span>
                  <span className="change number_16 pos">(+14.0 kg)</span>
                </div>
              </li>
              <li>
                <div className="text body_16_bold">골격근량</div>
                <div className="weight">
                  <span className="base number_16">27.0 kg</span>
                  <span className="change number_16 pos">(+14.0 kg)</span>
                </div>
              </li>
              <li>
                <div className="text body_16_bold">체지방률</div>
                <div className="weight">
                  <span className="base number_16">7.0 kg</span>
                  <span className="change number_16 neg">(-21.0 %)</span>
                </div>
              </li>
            </ul>

            <div className="history">
              <div className="text">
                <span className="kor caption_13">최근 기록</span>
                <span className="num number_13">2025.4.15</span>
              </div>
              <div className="btn">
                <Link to="/error" className="caption_13">
                  지난 기록보기
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section className="section record">
          <div className="link_box sb">
            <span className="popup_title_20">오늘의 운동</span>
            <div className="icon_box">
              <div className="icon">
                <Link to="/error">
                  <img src={require(`../assets/img/plus_green_icon.svg`).default} alt="추가" />
                </Link>
              </div>
              <div className="icon">
                <Link to="/error">
                  <img src={require(`../assets/img/downloadFile_green_icon.svg`).default} alt="추가" />
                </Link>
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
                <Link to="/error">
                  <img src={require(`../assets/img/plus_green_icon.svg`).default} alt="추가" />
                </Link>
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
