import { workSlider } from "@/app/types";
import {
  PiCaretLeftBold,
  PiCaretRightBold,
} from "react-icons/pi";
import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
}: workSlider) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
