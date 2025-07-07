const Footer = ({ type }) => {
    const { userType, footerType } = type;

    const isActive = (menu) => footerType === menu ? 'on' : '';

    return (
        <footer className={`${userType} ${footerType}`}>
            <ul>
                <li className='home'>
                    <figure className={isActive('home')}>
                        <img src="/img/footer/home_off.svg" alt="홈 버튼" />
                        <img src="/img/footer/home_on.svg" alt="홈 버튼" />
                        <figcaption className="caption_11">홈</figcaption>
                    </figure>
                </li>
                <li className='schedule'>
                    <figure className={isActive('schedule')}>
                        <img src="/img/footer/schedule_off.svg" alt="스케줄 버튼" />
                        <img src="/img/footer/schedule_on.svg" alt="스케줄 버튼" />
                        <figcaption className="caption_11">스케줄</figcaption>
                    </figure>
                </li>
                <li className='note'>
                    <figure className={isActive('note')}>
                        <img src="/img/footer/note_off.svg" alt="채팅 버튼" />
                        <img src="/img/footer/note_on.svg" alt="채팅 버튼" />
                        <figcaption className="caption_11">헬스 노트</figcaption>
                    </figure>
                </li>
                <li className='chat'>
                    <figure className={isActive('chat')}>
                        <img src="/img/footer/chat_off.svg" alt="채팅 버튼" />
                        <img src="/img/footer/chat_on.svg" alt="채팅 버튼" />
                        <figcaption className="caption_11">채팅</figcaption>
                    </figure>
                </li>
                <li className='management'>
                    <figure className={isActive('management')}>
                        <img src="/img/footer/management_off.svg" alt="회원 관리 버튼" />
                        <img src="/img/footer/management_on.svg" alt="회원 관리 버튼" />
                        <figcaption className="caption_11">회원 관리</figcaption>
                    </figure>
                </li>
                <li className='my'>
                    <figure className={isActive('my')}>
                        <img src="/img/footer/my_off.svg" alt="마이 버튼" />
                        <img src="/img/footer/my_on.svg" alt="마이 버튼" />
                        <figcaption className="caption_11">마이</figcaption>
                    </figure>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;