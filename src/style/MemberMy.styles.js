import styled from 'styled-components';

export const MemberMySection = styled.section`
  /* profile S: */
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile .detail_box {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    width: 100%;
  }

  .profile .detail_box .img_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    aspect-ratio: 1/1;
    background-color: var(--neutral-black-500);
    border: 1.5px solid var(--neutral-black-200);
    border-radius: 50%;
  }

  .profile .detail_box .img_box img {
    width: 75%;
  }

  .profile .detail_box .name_box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .profile .detail_box .name_box .user {
    color: var(--neutral-black-50);
  }

  .profile .detail_box .name_box .gym {
    color: var(--neutral-black-300);
  }

  .profile .mod_box {
    flex-shrink: 0;
    padding: 0.35rem 0.5rem;
    background-color: var(--neutral-black-700);
    border-radius: 1rem;
  }

  .profile .mod_box a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .profile .mod_box img {
    width: 0.9rem;
  }

  .profile .mod_box span {
    color: var(--neutral-black-50);
  }
  /* profile E: */

  /* status S: */
  .status {
    margin-top: 1rem;
  }

  .status ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.225rem 8.7%;
    background-color: rgba(119, 152, 129, 0.27);
    border-radius: 0.5rem;
  }

  .status ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--neutral-black-50);
  }
  /* status E: */
`;