import React from 'react';
import "./Logo.css";
//import frame2svg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-2.svg";
import frame2svg from "../../assets/images/jit/JIT-website_DESKTOP-frames-logocity.png";
import jitLogosvg from '../../assets/svg/jit-logos-objective-svg/jit-logo.svg';
import { Element } from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoDiscord } from "react-icons/bi";
import { BsCopy } from "react-icons/bs"
import { social_links } from "../../content-options";


const scrollOptions = {
    // your options here, for example:
    duration: 500,
    smooth: true,
};

const FRAME_2_WIDTH = 1920;
const FRAME_2_HEIGHT = 294;
const FRAME_2_ASPECT_RATIO = FRAME_2_HEIGHT / FRAME_2_WIDTH;


const scrollToTop = () => {
    scroll.scrollToTop(scrollOptions);
};

const CriticalText = () => {
  return (
<Element name="critical">
  <div
    className="container-fluid critical-background"
    style={{
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      justifyContent: 'left',
      alignItems: 'left',
      display: 'flex',
      backgroundImage: `url(${frame2svg})`
    }}
  >
    <img className="jit-logo" src={jitLogosvg} alt="JIT Logo" />
  </div>
</Element>
  );
};

export default CriticalText;