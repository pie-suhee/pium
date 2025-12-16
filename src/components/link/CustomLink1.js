import { Link } from 'react-router-dom';

const CustomLink1 = ({ to, iconSrc, text }) => {
    return (
        <Link to={to} className="customLink1"> 
            <article>
                <figure>
                    <img src={iconSrc} alt={`${text} 아이콘`} />
                    <figcaption className="body_16">{text}</figcaption>
                </figure>

                <img src="/img/my/linkBtn.svg" alt="이동 버튼" className="link-arrow" />
            </article>
        </Link>
    );
};

export default CustomLink1;