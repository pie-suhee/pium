import { useState, useEffect } from 'react';

const BottomType2 = ({ title, type }) => {
    /* 
        0: 토글 on/off
        1: 제목
        2: 관리
        3: 계정
        4: 버튼
        5: 팝업 푸터
    */

    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        setButtons(type);
    }, [type]);

    return (
        <>
            <button className={`toggleSlide ${buttons[0] === '1' ? 'on' : ''}`}>
                <div className='slideLine'></div>
            </button>

            <div className='contents'>
                <div className='bottomType2'>
                    <div className={`popupTitle ${buttons[1] === '1' ? 'on' : ''}`}>
                        <span className='popup_title_20'>{title}</span>

                        <button className={`management ${buttons[2] === '1' ? 'on' : ''}`}>관리</button>
                    </div>

                    <ul className={`accountList ${buttons[3] === '1' ? 'on' : ''}`}>
                        <li>
                            <button className='active'>
                                <figure>
                                    <img src={require('../../assets/img/profileImg1.svg').default} alt="프로필" />
                                    <figcaption>
                                        <div className='name body_16_bold'>정민아</div>
                                        <div className='gym caption_12'>서울 헬스장</div>
                                    </figcaption>
                                </figure>
                            </button>
                        </li>

                        <li>
                            <button className='disabled'>
                                <figure>
                                    <img src={require('../../assets/img/profileImg1.svg').default} alt="프로필" />
                                    <figcaption>
                                        <div className='name body_16_bold'>정민아</div>
                                        <div className='gym caption_12'>서울 헬스장</div>
                                    </figcaption>
                                </figure>
                            </button>
                        </li>
                    </ul>

                    <div className={`button ${buttons[4] === '1' ? 'on' : ''}`}>
                        {/* <Btns1  btnText="계정 추가하기" type="fill" bgColor="black800" color="text-primary-white" /> */}
                    </div>
                </div>
            </div>

            <div className={`popupFooter ${buttons[5] === '1' ? 'on' : ''}`}>
                <div className='footerLine'></div>
            </div>
        </>
    );
};

export default BottomType2;