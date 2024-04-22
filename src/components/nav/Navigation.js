import "./Navigation.css";
import navbarBackgroundsvg from "../../assets/svg/jit-website-layout-frames-objective-svg/header.png";
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
        <div className="navbar-background d-flex justify-content-between align-items-center w-100" style={{ backgroundImage: `url(${navbarBackgroundsvg})`, padding: '0 30px' }}>
            <Link className="text-decoration-none" to="/" onClick={scrollToTop}>
                <img src={jitLogosvg} className="jit-logo w-auto" alt="JIT" />
            </Link>
            <Link activeClass="active" className="nav-text-link text-decoration-none" to="critical" spy={true} smooth={true} duration={500} offset={-50}>CRITICAL</Link>
            <Link activeClass="active" className="nav-text-link text-decoration-none" to="about" spy={true} smooth={true} duration={500} offset={-50}>ABOUT</Link>
            <Link activeClass="active" className="nav-text-link text-decoration-none" to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>ROADMAP</Link>
            <Link activeClass="active" className="nav-text-link text-decoration-none" to="buy" spy={true} smooth={true} duration={500} offset={-50}>BUY</Link>
        </div>
    );
};

export default Navigation;