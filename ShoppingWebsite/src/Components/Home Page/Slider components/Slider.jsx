import React from "react";
import "./Slider.scss";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useDispatch } from "react-redux";
import { setAddress } from "./../../../Redux/Actions/Address Action";

export default function Slider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const dispatch = useDispatch();
  return (
    <div className="slider">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div>
          <Link
            to="/1"
            className="slider__link"
            onClick={() => dispatch(setAddress("/1"))}
          >
            <img
              src="/Img/1.jpg"
              className="slider__link__image"
              alt="No Image Available"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/3"
            className="slider__link"
            onClick={() => dispatch(setAddress("/3"))}
          >
            <img
              src="/Img/4.jpg"
              className="slider__link__image"
              alt="No Image Available"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/5"
            className="slider__link"
            onClick={() => dispatch(setAddress("/5"))}
          >
            <img
              src="/Img/6.jpg"
              className="slider__link__image"
              alt="No Image Available"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/7"
            className="slider__link"
            onClick={() => dispatch(setAddress("/7"))}
          >
            <img
              src="/Img/8.jpg"
              className="slider__link__image"
              alt="No Image Available"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/8"
            className="slider__link"
            onClick={() => dispatch(setAddress("/8"))}
          >
            <img
              src="/Img/2.png"
              className="slider__link__image"
              alt="No Image Available"
            />
          </Link>
        </div>
      </AutoplaySlider>
    </div>
  );
}
