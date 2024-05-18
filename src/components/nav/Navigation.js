import "./Navigation.css";
import { Link, animateScroll as scroll } from 'react-scroll';

const scrollOptions = {
    // your options here, for example:
    duration: 500,
    smooth: true,
};

const scrollToTop = () => {
    scroll.scrollToTop(scrollOptions);
};

const Navigation = () => {
    return (
        <div className="navbar-background">
            <Link activeClass="active" className="nav-text-link text-decoration-none" to="critical" spy={true} smooth={true} duration={500} offset={-50}>JIT</Link>
            <Link activeClass="active" className="nav-text-link text-decoration-none" to="about" spy={true} smooth={true} duration={500} offset={-50}>THE CALL</Link>
            <Link activeClass="active" className="nav-text-link text-decoration-none" to="buy" spy={true} smooth={true} duration={500} offset={-50}>HOW TO BUY</Link>
            <Link activeClass="active" className="nav-text-link text-decoration-none" to="roadmap" spy={true} smooth={true} duration={500} offset={-50}>ROADMAP</Link>
        </div>
    );
};

export default Navigation;
