import { InputHTMLAttributes } from "react";
import "./Slider.css";

const Slider = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="slider-ui" type="range" {...props} />;
};

export default Slider;
