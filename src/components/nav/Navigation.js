import React from 'react';
import "./Navigation.css";
import SvgJitLogo from '../svg/jit-logos-objective-svg/JitLogo';
// import SvgJitLogo from '../svg/jit-logos-adobe-png-to-svg/JitLogo';
import navbarBackgroundsvg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-1.svg";
// import navbarBackgroundsvg from "../../assets/svg/jit-website-layout-frames-adobe-png-to-svg/jit-website-layout-frames-1.svg";
import SvgJitWebsiteLayoutFrames1 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames1';
import { Link as LinkScroll, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const options = {
    // your options here, for example:
    duration: 500,
    smooth: true,
  };

const scrollToTop = () => {
    scroll.scrollToTop(options);
};


const Navigation = () => {
    return (
        <header className="fixed-top site__header" style={{ backgroundSize: 'contain', backgroundImage: `url(${navbarBackgroundsvg})` }}>
            <div className="d-flex align-items-center justify-content-between">
                <SvgJitLogo className="navbar-brand nav_ac" onClick={scrollToTop} />
                <div className="d-flex align-items-center">
                    <LinkScroll activeClass="active" className="nav_ac" to="critical" spy={true} smooth={true} duration={500} offset={-50}>CRITICAL TEXT</LinkScroll>
                    <LinkScroll activeClass="active" className="nav_ac" to="about" spy={true} smooth={true} duration={500} offset={-50}>ABOUT</LinkScroll>
                    <LinkScroll activeClass="active" className="nav_ac" to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>ROADMAP</LinkScroll>
                    <LinkScroll activeClass="active" className="nav_ac" to="buy" spy={true} smooth={true} duration={500} offset={-50}>HOW TO BUY</LinkScroll>
                </div>
            </div>
        </header>
    );
};

export default Navigation;





///////////// FIND WAY TO MAKE SVG FIT NAVIGATION CONTAINER (WIDTH, HEIGHT, VIEWBOX, ASPECT RATIO) //////////////

// import React from 'react';
// import "./Navigation.css";
// import SvgJitLogo from '../svg/jit-logos-objective-svg/JitLogo';
// // import SvgJitLogo from '../svg/jit-logos-adobe-png-to-svg/JitLogo';
// import navbarBackgroundsvg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-1.svg";
// // import navbarBackgroundsvg from "../../assets/svg/jit-website-layout-frames-adobe-png-to-svg/jit-website-layout-frames-1.svg";
// import SvgJitWebsiteLayoutFrames1 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames1';
// import { Link as LinkScroll, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// const options = {
//     // your options here, for example:
//     duration: 500,
//     smooth: true,
//   };

// const scrollToTop = () => {
//     scroll.scrollToTop(options);
// };

// // aspectratio={'102:5'}

// const Navigation = () => {
//     return (
//         <header className="fixed-top site__header" >
//             <SvgJitWebsiteLayoutFrames1 className="" width={'100%'} height={'100%'} style={{ position: 'absolute', zIndex: -1 }} /> {/* SVG background with lower z-index */}
//             <div className="d-flex align-items-center justify-content-between">
//                 <SvgJitLogo className="navbar-brand nav_ac" onClick={scrollToTop} />
//                 <div className="d-flex align-items-center">
//                     {/* <Themetoggle /> */}
//                     <LinkScroll className="nav_ac" to="critical" spy={true} smooth={true} duration={500}>Critical Text</LinkScroll>
//                     <LinkScroll className="nav_ac" to="about" spy={true} smooth={true} duration={500}>About</LinkScroll>
//                     <LinkScroll className="nav_ac" to="roadmap" spy={true} smooth={true} duration={500}>Roadmap</LinkScroll>
//                     <LinkScroll className="nav_ac" to="buy" spy={true} smooth={true} duration={500}>How to Buy</LinkScroll>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navigation;