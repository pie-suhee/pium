import { useState } from "react";

import { useSelector } from 'react-redux';
import { useScheduleData } from "../hook/useScheduleData.js";
import { getMonthlyCalendarCells, formatDateKey } from '../utils/dateCalculations.js';
import { formatTimeWithAmPm, calculateDuration } from "../utils/timeUtils.js";

import Header from "../components/Header";

import { HealthNoteSection } from '../style/HealthNote.styles.js';

function HealthNote() {
  // 🌟 Redux에서 현재 연/월/일 정보 가져오기
  const { year, month, date, dayOfWeek, dateKey } = useSelector(state => state.date); 
    
  // 🌟 로컬 계산 로직 제거, Redux 상태와 유틸리티 함수 사용
  const calendarCells = getMonthlyCalendarCells(year, month);
  const todayKey = formatDateKey(year, month, date); // 현재 날짜 키 (비교용)
  
  const [selectedDate, setSelectedDate] = useState(
    dateKey
  );

  const { selectedEvents, getEventCount } = useScheduleData(selectedDate);
    
  const handleDayClick = (dayOfMonth) => {
    const key = formatDateKey(year, month, dayOfMonth);
    setSelectedDate(key);
  };

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <Header title="헬스 노트" type="0010000000110000" />
      <HealthNoteSection>
        <section className="section calendar">
          <div className="calendar-head">
            <div className="date popup_title_20">{`${month}월 ${date}일 ${week[dayOfWeek]}요일`}</div>
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
                  <li>
                    <div className="startTime caption_14">{formatTimeWithAmPm(ev.start)}</div>
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
                <img src={require(`../assets/img/plus_green_icon.svg`).default} alt="추가" />
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
              <div className="btn caption_13">지난 기록보기</div>
            </div>
          </article>
        </section>

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
