import styled from 'styled-components';

export const HealthNoteSection = styled.section`
    /* common S: */
    section + section {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 30px;
    }
    /* common E: */

    /* calendar S: */
    .calendar .calendar-head .date {
        color: var(--neutral-black-50);
    }

    .calendar .calendar-content .calendar-grid .week {
        color: var(--neutral-black-300);
    }

    .calendar .calendar-content .calendar-grid {
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        text-align: center;
        background-color: var(--form-fill-disabled);
        padding: 5%;
        border-radius: 0.5em;
    }
    
    .calendar .calendar-content .calendar-grid > div {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1 / 1;
    }

    .calendar .calendar-content .calendar-grid .day {
        background-color: var(--neutral-black-500);
        border-radius: 50%;
        position: relative;
    }

    .calendar .calendar-content .calendar-grid .day .date-number {
        padding: 0 0 0.08em 0.015em;
        color: var(--neutral-black-50);
    }
    
    .calendar .calendar-content .calendar-grid .day.past {
    }

    .calendar .calendar-content .calendar-grid .day.selected {
        background-color: var(--primary-green);
    }

    .calendar .calendar-content .calendar-grid .day.selected .date-number {
        color: var(--neutral-black-800);
    }

    .calendar .calendar-content .calendar-grid .day.past {
        position: relative;
    }

    .calendar .calendar-content .calendar-grid .day.past::before,
    .calendar .calendar-content .calendar-grid .day.past .badge::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(85, 85, 85, 0.5);
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
    }

    .calendar .calendar-content .calendar-grid .day .badge {
        width: 40%;
        aspect-ratio: 1/1;
        padding: 0.01em 0 0 0.01em;
        background-color: var(--secondary-red);
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        color: var(--neutral-black-50);
        z-index: 1;
    }

    .calendar .calendar-events {
        margin-top: 15px;
    }

    .calendar .calendar-events ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .calendar .calendar-events .startTime {
        color: var(--primary-green);
    }

    .calendar .calendar-events .event_list {
        margin-top: 5px;
        padding: 1em 6%;
        background-color: #44504B;
        border: 1px solid var(--primary-green);
        border-radius: 0.5em;
    }

    .calendar .calendar-events .event_list .title {
        color: var(--neutral-black-100);
    }

    .calendar .calendar-events .event_list .time {
        color: var(--neutral-black-50);
    }
    /* calendar E: */

    /* body S: */
    .body .body_list {
        margin-top: 12px;
    }

    .body .body_list ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .body .body_list ul li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.1em 6%;
        background-color: var(--neutral-black-700);
        border-radius: 0.5em;
        color: var(--neutral-black-50);
    }

    .body .body_list ul li .weight {
        display: flex;
        gap: 6px;
    }

    .body .body_list ul li .weight span.pos {
        color: var(--primary-green);
    }

    .body .body_list ul li .weight span.neg {
        color: var(--secondary-red);
    }

    .body .history {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
    }

    .body .history .text {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--neutral-black-500);
    }

    .body .history .btn {
        color: var(--neutral-black-300);
    }
    /* body E: */

    /* record S: */
    .record .record_list ul {
        padding: 1.1em 6% 1.2em;
        background-color: #494949;
        border-radius: 0.5em;
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
        margin-top: 2em;
        position: relative;
    }

    .record .record_list ul li + li::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: var(--neutral-black-600);
        position: absolute;
        top: -0.9em;
        /* transform: translateY(-100%); */
    }
    /* record E: */

    /* mealPlan S: */
    .mealPlan .mealPlan_list ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .mealPlan .mealPlan_list ul li {
        display: flex;
        align-items: center;
        gap: 13px;
    }

    .mealPlan .mealPlan_list ul li .img_box {
        width: 20%;
        aspect-ratio: 1/1;
        flex-shrink: 0;
        background-color: #d6d6d7;
        border-radius: 0.4em;
        overflow: hidden;
        position: relative;
    }

    .mealPlan .mealPlan_list ul li .img_box img {
        object-fit: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .mealPlan .mealPlan_list ul li .text_box {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .mealPlan .mealPlan_list ul li .text_box .time {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .mealPlan .mealPlan_list ul li .text_box .time .title {
        color: var(--neutral-black-50);
    }

    .mealPlan .mealPlan_list ul li .text_box .time .detail {
        color: var(--neutral-black-400);
    }
    
    .mealPlan .mealPlan_list ul li .text_box .meal {
        color: var(--neutral-black-300);
        text-overflow:ellipsis;
        white-space:normal;
        overflow:hidden;
        word-wrap:break-word;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        word-break: keep-all;
    } 
    /* mealPlan E: */
`;