import { useSelector } from "react-redux";
import { useScheduleData } from "../hook/useScheduleData.js";
import { getWeeklyDates, formatDateKey } from '../utils/dateCalculations.js';

import Header from "../components/Header";
import DropPanel from "../components/select/DropPanel";

import { MemberHomeSection } from '../style/MemberHome.styles.js';

const week = ['일', '월', '화', '수', '목', '금', '토'];
const kWeek = ["첫", "둘", "셋", "넷", "다섯"];

function MemberHome() {
  // Redux에서 날짜 정보 가져오기
  const { year, month, date, dayOfWeek, weekOfMonth } = useSelector(state => state.date);

  // 로컬 계산 로직 제거, 유틸리티 함수를 사용해 days 배열 생성
  const days = getWeeklyDates(year, month, date, dayOfWeek);

  const { getEventCount } = useScheduleData("2025-01-01");

  return (
    <>
      <Header title="멘트" type="0100000000000001" />
      <MemberHomeSection>
        <section className="section mainBanner">
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

        <section className="section memberShip">
          <DropPanel>
            <DropPanel.Header>
              <div className="header-content">
                <div className="member">
                  <div className="name body_16_bold">김지우</div>
                  <div className="tag_box">
                    <span className="tag type1">1:1PT</span>
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

        <section className="section startBtn">
          <article>
            <div className="today body_16_bold">
              {`${year}년 ${month}월 ${date}일 ${week[dayOfWeek]}요일`}
            </div>
            <button className="btn caption_14_bold">오늘의 운동 시작하기</button>
          </article>
        </section>

        <section className="section calendar">
          <DropPanel>
            <DropPanel.Header>
              <div className="header-content body_16_bold">
                {`${year}년 ${month}월 ${kWeek[weekOfMonth]}째 주`}
              </div>
            </DropPanel.Header>

            <DropPanel.Content>
              <ul className="week">
                {days.map((dayObj, i) => {
                  const isToday = dayObj.getDate() === date;

                  const currentDayKey = formatDateKey(
                    dayObj.getFullYear(),
                    dayObj.getMonth() + 1, // month는 1-기반이어야 함
                    dayObj.getDate()
                  );

                  const hasPlan = getEventCount(currentDayKey) > 0;
                  
                  return (
                    <li key={dayObj.toISOString()} className={`day${isToday ? ' today' : ''}`}>
                      <div className="text caption_15_medium">{week[i]}</div>
                      <div className="num">{dayObj.getDate()}</div>
                      <div className={`plan${hasPlan ? ' isPlan' : ''}`}></div>
                    </li>
                  );
                })}
              </ul>
            </DropPanel.Content>
          </DropPanel>
        </section>

        <section className="section schedule">
          <div className="link_box">
            <span className="body_16_bold">나의 스케줄</span>
            <div className="arrow">
              <img src={require(`../assets/img/link_icon.svg`).default} alt="이동 화살표" />
            </div>
          </div>

          <article>
            <span className="time caption_14_bold">오후 1:00</span>
            <div className="schedule_box">
              <div className="title body_16_bold">
                개인 PT 10시 ~ 11시 수업
              </div>
              <div className="detail caption_14">
                오전 10:00 - 11:00 (1시간)
              </div>
            </div>
          </article>
        </section>

        <section className="section record">
          <div className="link_box">
            <span className="body_16_bold">나의 운동 기록</span>
            <div className="arrow">
              <img src={require(`../assets/img/link_icon.svg`).default} alt="이동 화살표" />
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
      </MemberHomeSection>
    </>
  );
}

export default MemberHome;
