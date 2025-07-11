import "../../css/Button.css";

const ButtonType1 = ({text, bg, color}) => {
    return (
        <button className={`btn bg_${bg} c_${color} caption_14_bold`}>
            {text}
        </button>
    );
};

export default ButtonType1;