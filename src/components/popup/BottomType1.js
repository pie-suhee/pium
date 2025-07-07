import { useState, useEffect } from 'react';

const BottomType1 = ({ title, type }) => {
    /* 
        0: 토글 on/off
        1: 제목
        2: 편집
        3: 알림
        4: 스케줄 등록
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
                <div className='bottomType1'>
                    <div className={`popupTitle ${buttons[1] === '1' ? 'on' : ''}`}>
                        <span className='popup_title_20'>{title}</span>
                    </div>

                    <ul className='textList'>
                        <li className={`${buttons[2] === '1' ? 'on' : ''}`}>
                            <button>
                                <figure>
                                    <img src={require('../../assets/img/pencil_icon.svg').default} alt="편집 버튼" />
                                    <figcaption className="body_16">편집</figcaption>
                                </figure>
                            </button>
                        </li>
                        <li className={`${buttons[3] === '1' ? 'on' : ''}`}>
                            <button>
                                <figure>
                                    <img src={require('../../assets/img/bellRing_icon.svg').default} alt="편집 버튼" />
                                    <figcaption className="body_16">알림</figcaption>
                                </figure>
                            </button>
                        </li>
                        <li className={`${buttons[4] === '1' ? 'on' : ''}`}>
                            <button>
                                <figure>
                                    <img src={require('../../assets/img/plus_icon.svg').default} alt="편집 버튼" />
                                    <figcaption className="body_16">스케줄 등록</figcaption>
                                </figure>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`popupFooter ${buttons[5] === '1' ? 'on' : ''}`}>
                <div className='footerLine'></div>
            </div>
        </>
    );
};

export default BottomType1;