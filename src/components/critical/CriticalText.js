import React from 'react';
import "./CriticalText.css";
import frame2svg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-2.svg";
import { Element } from 'react-scroll';
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoDiscord } from "react-icons/bi";
import { BsCopy } from "react-icons/bs"

import { social_links } from "../../content-options";

const FRAME_2_WIDTH = 1920;
const FRAME_2_HEIGHT = 294;
const FRAME_2_ASPECT_RATIO = FRAME_2_HEIGHT / FRAME_2_WIDTH;

const CriticalText = () => {
  return (
    <Element name="critical" >
      <div className="container-fluid text-center g-0 critical-background" style={{ backgroundPosition: 'center', backgroundSize: 'cover', justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundImage: `url(${frame2svg})` }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ED8730', width: '40vw', marginTop: '4vh', marginBottom: '3vh' }}>
            <span style={{ padding: '7px' }}>
              <strong>CA: Address </strong>
              <BsCopy size={'1em'} />
            </span>


          </span>
          <div className='critical-icons'>
            {social_links.discord && (
              <a href={social_links.discord} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                <BiLogoDiscord size={'3.5em'} />
                <span style={{ fontSize: '40px', paddingRight: '5vw' }}>Discord</span>
              </a>
            )}

            {social_links.XTwitter && (
              <a href={social_links.XTwitter} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                <RiTwitterXLine size={'3em'} />
                <span style={{ fontSize: '40px' }}>twitter</span>
              </a>
            )}


          </div>
        </div>
      </div>
    </Element>
  );
};

export default CriticalText;