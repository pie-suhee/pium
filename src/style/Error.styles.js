import styled from 'styled-components';

export const ErrorSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    min-height: calc(100% - 64px);
    padding-top: 20px;

    span {
        color:  var(--neutral-black-50);
    }
`;