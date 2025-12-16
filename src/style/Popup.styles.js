import styled from 'styled-components';

export const PopupSection = styled.section`
    .popupBack {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 200;
        backdrop-filter: blur(7px);
    }

    /* bottomPopup S: */
    .bottomPopup {
        width: 100vw;
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 33px;
        background-color: transparent;
    }

    .bottomPopup .popupFooter {
        align-items: flex-end;
        padding-bottom: 0.4rem;
    }

    .bottomPopup .toggleSlide .slideLine {
        width: 9%;
        height: 0.25rem;
        background-color: rgba(217, 217, 217, 1);
        border-radius: 2.5px;
    }

    .bottomPopup .popupFooter .footerLine {
        width: 36%;
        height: 0.25rem;
        background-color: rgba(248, 248, 248, 1);
        border-radius: 2.5px;
    }

    .bottomPopup .bottom-popup-content {
        width: 88%;
        margin: 1.25rem auto 0;
    }
`;