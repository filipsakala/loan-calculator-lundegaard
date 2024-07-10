import { InputHTMLAttributes } from "react";
import "./Slider.css";

const SliderInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="slider-ui" type="range" {...props} />;
};

export default SliderInput;
