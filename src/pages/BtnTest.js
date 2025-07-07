import ToggleBtn from "../components/button/ToggleBtn";
import Btns1 from "../components/button/Btn1";
import BtnRound from "../components/button/BtnRound";

function BtnTest() {
  return (
    <>
      <Btns1 btnText="계정 추가하기" type="fill" bgColor="black800" color="white" />
      <Btns1 btnText="운동 추가하기" type="fill" bgColor="green" color="black" size="half" />
      <ToggleBtn text="일시정지" toggleColor="green" />
      <BtnRound btnText="이전" />
    </>
  );
}

export default BtnTest;
