import styled from 'styled-components';

export const HealthNoteSection = styled.section`
    /* record S: */
    .record {
        margin-top: 12px;
    }

    .record .record_list {
        margin-top: 16px;
    }

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
    .mealPlan {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
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