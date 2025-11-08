import styled from 'styled-components';

export const PopupSection = styled.section`
    .popupBack {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 200;
        backdrop-filter: blur(7px);
    }

    /* bottomPopup S: */
    .bottomPopup {
        width: 100%;
        max-width: 720px;
        background-color: var(--neutral-black-600);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        position: fixed;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        z-index: 300;
        overflow: hidden;
    }

    .bottomPopup .toggleSlide,
    .bottomPopup .popupFooter  {
        display: none;
        width: 100%;
        height: 33px;
        background-color: transparent;
    }

    .bottomPopup .toggleSlide.on,
    .bottomPopup .popupFooter.on {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bottomPopup .toggleSlide .slideLine {
        width: 9%;
        height: 5px;
        background-color: rgba(217, 217, 217, 1);
        border-radius: 2.5px;
    }

    .bottomPopup .popupFooter .footerLine {
        width: 36%;
        height: 5px;
        background-color: rgba(248, 248, 248, 1);
        border-radius: 2.5px;
    }

    .bottomPopup .contents {
        width: 88%;
        margin: 0 auto;
        padding-bottom: 30px;
    }

    .bottomPopup .contents .popupTitle {
        display: none;
        height: 64px;
        color: rgba(255, 255, 255, 1);
        position: relative;
    }

    .bottomPopup .contents .popupTitle .management {
        display: none;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-family: Pretendard;
        font-weight: 500;
        font-size: 1em;
        color: rgba(196, 196, 196, 1);
        line-height: 1.4;
        letter-spacing: 0;
    }

    .bottomPopup .contents .popupTitle .management.on {
        display: block;
    }

    .bottomPopup .contents .popupTitle.on {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bottomPopup .contents .bottomType1 .textList li {
        display: none;
        height: 40px;
    }

    .bottomPopup .contents .bottomType1 .textList li.on {
        display: block;
    }

    .bottomPopup .contents .bottomType1 .textList li button {
        width: 100%;
        height: 100%;
    }

    .bottomPopup .contents .bottomType1 .textList li figure {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .bottomPopup .contents .bottomType1 .textList li figure figcaption {
        color: var(--neutral-white);
    }

    .bottomPopup .contents .bottomType2 .accountList {
        display: none;
    }

    .bottomPopup .contents .bottomType2 .accountList.on {
        display: block;
    }

    .bottomPopup .contents .bottomType2 .accountList li {
        width: 100%;
        margin-top: 10px;
    }

    .bottomPopup .contents .bottomType2 .accountList li button {
        width: 100%;
        padding: 6%;
        background-color: rgba(67, 67, 67, 1);
        border: 1px solid var(--neutral-black-600);
        border-radius: 10px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    }

    .bottomPopup .contents .bottomType2 .accountList li button.active {
        border: 1px solid var(--primary-green);
    }

    .bottomPopup .contents .bottomType2 .accountList li button.disabled {
        opacity: 0.5;
    }

    .bottomPopup .contents .bottomType2 .accountList li figure {
        display: flex;
        align-items: center;
        gap: 13px;
    }

    .bottomPopup .contents .bottomType2 .accountList li figure img {
        width: 17%;
        aspect-ratio: 1/1;
        object-fit: contain;
        background-color: var(--neutral-black-500);
        border: 1.5px solid var(--neutral-black-200);
        border-radius: 50%;
    }

    .bottomPopup .contents .bottomType2 .accountList li figure figcaption {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
    }

    .bottomPopup .contents .bottomType2 .accountList li figure figcaption .name {
        color: var(--neutral-white);
    }

    .bottomPopup .contents .bottomType2 .accountList li figure figcaption .gym {
        color: rgba(196, 196, 196, 1);
    }

    .bottomPopup .contents .bottomType2 .accountList + .button {
        display: none;
        width: 100%;
        margin-top: 20px;
    }

    .bottomPopup .contents .bottomType2 .accountList + .button.on {
        display: inline-flex;
    }
    /* bottomPopup E: */
`;