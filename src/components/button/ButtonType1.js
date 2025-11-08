import { ButtonSection } from '../../style/Button.styles.js';

const ButtonType1 = ({text, bg, color}) => {
    return (
        <ButtonSection>
            <button className={`btn bg_${bg} c_${color} caption_14_bold`}>
                {text}
            </button>
        </ButtonSection>
    );
};

export default ButtonType1;