import "./Navigation.css";
import navbarBackgroundsvg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-1.svg";
import jitLogosvg from '../../assets/svg/jit-logos-objective-svg/jit-logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';

const scrollOptions = {
    // your options here, for example:
    duration: 500,
    smooth: true,
};

const scrollToTop = () => {
    scroll.scrollToTop(scrollOptions);
};

const FRAME_1_WIDTH = 1920;
const FRAME_1_HEIGHT = 290;
const FRAME_1_ASPECT_RATIO = FRAME_1_HEIGHT / FRAME_1_WIDTH;

const LOGO_WIDTH = 296;
const LOGO_HEIGHT = 203;
const LOGO_ASPECT_RATIO = LOGO_HEIGHT / LOGO_WIDTH;

const Navigation = () => {
    return (
        <div className="container-fluid g-0 fixed-top ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${navbarBackgroundsvg})`, '--bs-aspect-ratio': `${FRAME_1_ASPECT_RATIO * 100}%` }}>
            <div className="row align-items-center text-center ms-0 me-0">
                <div className="col ms-5">
                    <Link className="" to="/" onClick={scrollToTop}>
                        <img src={jitLogosvg} className="jit-logo w-auto" alt="JIT" />
                    </Link>
                </div>
                <div className="col">
                    <Link activeClass="active" className="nav-text-link" to="critical" spy={true} smooth={true} duration={500} offset={-50}>CRITICAL TEXT</Link>
                </div>
                <div className="col">
                    <Link activeClass="active" className="nav-text-link" to="about" spy={true} smooth={true} duration={500} offset={-50}>ABOUT</Link>
                </div>
                <div className="col">
                    <Link activeClass="active" className="nav-text-link" to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>ROADMAP</Link>
                </div>
                <div className="col">
                    <Link activeClass="active" className="nav-text-link" to="buy" spy={true} smooth={true} duration={500} offset={-50}>HOW TO BUY</Link>
                </div>
            </div>
        </div>

        // <nav className="navbar fixed-top navbar-expand-sm ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${navbarBackgroundsvg})`, '--bs-aspect-ratio': `${FRAME_1_ASPECT_RATIO * 100}%` }}>
        //     <div className="d-flex flex-row align-items-center justify-content-between">
        //         <Link className="collapse navbar-collapse" to="/">
        //             <img src={jitLogosvg} className="w-auto" alt="JIT" height="100" />
        //         </Link>
        //         <Link activeClass="active" className="nav-text-link" to="critical" spy={true} smooth={true} duration={500} offset={-50}>CRITICAL TEXT</Link>
        //         <Link activeClass="active" className="nav-text-link" to="about" spy={true} smooth={true} duration={500} offset={-50}>ABOUT</Link>
        //         <Link activeClass="active" className="nav-text-link" to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>ROADMAP</Link>
        //         <Link activeClass="active" className="nav-text-link" to="buy" spy={true} smooth={true} duration={500} offset={-50}>HOW TO BUY</Link>
        //     </div>
        // </nav>

        // <Navbar bg="dark" expand="md lg xl xxl" fixed="top" className="ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${navbarBackgroundsvg})`, '--bs-aspect-ratio': `${29 / 192 * 100}%` }}>
        //     <Link className="me-auto" to="/">
        //         <SvgJitLogo className="navbar-brand nav_ac" onClick={scrollToTop} />
        //     </Link>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="ms-auto">
        //             <Link activeClass="active" className="nav_ac" to="critical" spy={true} smooth={true} duration={500} offset={-50}>CRITICAL TEXT</Link>
        //             <Link activeClass="active" className="nav_ac" to="about" spy={true} smooth={true} duration={500} offset={-50}>ABOUT</Link>
        //             <Link activeClass="active" className="nav_ac" to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>ROADMAP</Link>
        //             <Link activeClass="active" className="nav_ac" to="buy" spy={true} smooth={true} duration={500} offset={-50}>HOW TO BUY</Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );
};

export default Navigation;














// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import "./Navigation.css";
// import SvgJitLogo from '../svg/jit-logos-objective-svg/JitLogo';
// import navbarBackgroundsvg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-1.svg";
// import SvgJitWebsiteLayoutFrames1 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames1';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// const options = {
//     // your options here, for example:
//     duration: 500,
//     smooth: true,
// };

// const scrollToTop = () => {
//     scroll.scrollToTop(options);
// };

// const Navigation = () => {
//     return (
//         <Navbar bg="dark" expand="md lg xl xxl" fixed="top" className="ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${navbarBackgroundsvg})`, '--bs-aspect-ratio': `${29 / 192 * 100}%` }}>
//             <Link className="me-auto" to="/">
//                 <SvgJitLogo className="navbar-brand nav_ac" onClick={scrollToTop} />
//             </Link>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ms-auto">
//                     <Link activeClass="active" className="nav_ac" to="critical" spy={true} smooth={true} duration={500} offset={-50}>CRITICAL TEXT</Link>
//                     <Link activeClass="active" className="nav_ac" to="about" spy={true} smooth={true} duration={500} offset={-50}>ABOUT</Link>
//                     <Link activeClass="active" className="nav_ac" to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>ROADMAP</Link>
//                     <Link activeClass="active" className="nav_ac" to="buy" spy={true} smooth={true} duration={500} offset={-50}>HOW TO BUY</Link>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default Navigation;






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


// const Navigation = () => {
//     return (
//         <header className="fixed-top site__header" style={{ backgroundSize: 'contain', backgroundImage: `url(${navbarBackgroundsvg})` }}>
//             <div className="d-flex align-items-center justify-content-between">
//                 <SvgJitLogo className="navbar-brand nav_ac" onClick={scrollToTop} />
//                 <div className="d-flex align-items-center">
//                     <LinkScroll activeClass="active" className="nav_ac" to="critical" spy={true} smooth={true} duration={500} offset={-50}>CRITICAL TEXT</LinkScroll>
//                     <LinkScroll activeClass="active" className="nav_ac" to="about" spy={true} smooth={true} duration={500} offset={-50}>ABOUT</LinkScroll>
//                     <LinkScroll activeClass="active" className="nav_ac" to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>ROADMAP</LinkScroll>
//                     <LinkScroll activeClass="active" className="nav_ac" to="buy" spy={true} smooth={true} duration={500} offset={-50}>HOW TO BUY</LinkScroll>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navigation;