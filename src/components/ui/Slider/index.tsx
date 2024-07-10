import { InputHTMLAttributes } from "react";
import "./Slider.css";

const Slider = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className="slider-ui" type="range" />;
};

export default Slider;
