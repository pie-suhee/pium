import styled from 'styled-components';

export const MemberHomeSection = styled.section`
  /* mainBanner S: */
  .mainBanner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .mainBanner .text_box {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .mainBanner .text_box .text_t1 {
    font-weight: 700;
    font-size: 0.875rem;
    color: var(--primary-green);
    line-height: 1.4;
    letter-spacing: -0.025rem;
  }

  .mainBanner .text_box .text_t2 {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--neutral-black-50);
    line-height: 1.3;
    letter-spacing: -0.025rem;
  }
  /* mainBanner E: */

  /* memberShip S: */
  .memberShip {
    margin-top: 30px;
  }

  .memberShip .drop-panel-container {
    background-color: var(--form-fill-disabled);
    border-radius: 0.5rem;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.102);
    overflow: hidden;
  }

  .memberShip .drop-panel-header {
    padding: 1.1rem 6%;
  }

  .memberShip .header-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .memberShip .header-content .member {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .memberShip .header-content .member .name {
    color: #ececec;
  }

  .memberShip .header-content .member .tag_box {
    display: flex;
    gap: 8px;
  }

  .memberShip .header-content .member .tag_box .tag {
    padding: 4px 4px 3px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 0.5rem;
    line-height: 1;
    letter-spacing: -0.01rem;
  }

  .memberShip .header-content .member .tag_box .tag.type1 {
    border: 1px solid var(--primary-green);
    color: var(--neutral-black-50);
  }

  .memberShip .header-content .member .tag_box .tag.type2 {
    background-color: #779881;
    color: var(--neutral-black);
  }

  .memberShip .header-content .date {
    color: var(--neutral-black-400);
  }

  .memberShip .drop-panel-content-wrapper {
    background-color: var(--btn-choose-disabled);
  }

  .memberShip .drop-panel-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0.75rem 6%;
  }

  .memberShip .drop-panel-content .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .memberShip .drop-panel-content .info-row span {
    font-weight: 400;
    font-size: 0.8125rem;
    color: var(--neutral-black-50);
    line-height: 1.4;
    letter-spacing: -0.025rem;
  }

  .memberShip .drop-panel-content .info-row .index {
    font-weight: 600;
  }

  .memberShip .drop-panel-content .info-row .date {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .memberShip .drop-panel-content .info-row .date .green {
    color: var(--primary-green);
  }
  /* memberShip E: */

  /* calendar S: */
  .calendar {
    margin-top: 20px;
  }

  .calendar .header-content {
    color: var(--neutral-black-50);
  }
  
  .calendar .drop-panel-container {
    background-color: var(--form-fill-disabled);
    border-radius: 0.5rem;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.102);
    overflow: hidden;
  }

  .calendar .drop-panel-header {
    padding: 1.1rem 6%;
  }

  .calendar .drop-panel-content {
    padding: 0.75rem 6% 1.5rem;
  }

  .calendar .week {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .calendar .day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .calendar .day .text {
    color: var(--neutral-black-300);
  }

  .calendar .day.today .text {
    color: var(--primary-green);
  }

  .calendar .day .num {
    width: 2rem;
    aspect-ratio: 1/1;
    margin-top: 1.25rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    color: #b4b8c0;
    line-height: 1;
    letter-spacing: -0.025rem;
  }

  .calendar .day.today .num {
    background-color: var(--primary-green);
    color: var(--neutral-black-800);
    font-weight: 600;
  }

  .calendar .day .plan {
    display: none;
    width: 4px;
    aspect-ratio: 1/1;
    background-color: var(--primary-yellow);
    margin-top: 16px;
    border-radius: 50%;
  }

  .calendar .day .plan.isPlan {
    display: block;
  }
  /* calendar E: */

  /* startBtn S: */
  .startBtn {
    margin-top: 20px;
  }

  .startBtn article a {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1rem 6%;
    background-color: var(--form-fill-disabled);
    border-radius: 0.5rem;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.102);
  }

  .startBtn .today {
    color: var(--neutral-black-50);
  }

  .startBtn .btn {
    padding: 0.725rem 0;
    background-color: var(--primary-green);
    border-radius: 0.5rem;
    color: var(--neutral-black-800);
  }
  /* startBtn E: */

  /* schedule S: */
  .schedule {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .schedule article {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .schedule article .time {
    color: var(--primary-green);
  }

  .schedule article .schedule_box {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 1rem 6%;
    background-color: #44504B;
    border: 1px solid var(--primary-green);
    border-radius: 0.5rem;
    box-shadow: 0px 0px 2.18px 0px rgba(0, 0, 0, 0.102);
  }

  .schedule article .schedule_box .title {
    color: var(--neutral-black-100);
  }

  .schedule article .schedule_box .detail {
    color: var(--neutral-black-50);
  }
  /* schedule E: */

  /* record S: */
  .record {
    margin-top: 20px;
  }

  .record .record_list {
    margin-top: 16px;
  }

  .record .record_list ul {
    padding: 1.1rem 6% 1.2rem;
    background-color: #494949;
    border-radius: 0.5rem;
  }

  .record .record_list ul li {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .record .record_list ul li .title {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .record .record_list ul li .title span {
    color: var(--neutral-black-50);
  }

  .record .record_list ul li .value {
    display: flex;
    justify-content: space-between;
  }

  .record .record_list ul li .value span {
    color: var(--neutral-black-300);
  }

  .record .record_list ul li .value .number_16 {
    color: var(--primary-green);
  }

  .record .record_list ul li + li {
    margin-top: 2rem;
    position: relative;
  }

  .record .record_list ul li + li::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--neutral-black-600);
    position: absolute;
    top: -0.9rem;
    /* transform: translateY(-100%); */
  }
  /* record E: */
`;