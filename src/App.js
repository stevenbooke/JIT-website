import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from './components/nav/Navigation';
import CriticalText from './components/critical/CriticalText';
import About from './components/about/About';
import Roadmap from './components/roadmap/Roadmap';
import Buy from './components/buy/Buy';
import Footer from './components/footer/Footer';
import SvgJitWebsiteLayoutFrames1 from './components/svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames1';

const App = () => {
  return (
    <div className='d-flex flex-column w-100'>
      <Navigation />
      <CriticalText />
      <About />
      <Roadmap />
      <Buy />
      <Footer />

      {/* <section className="section1">
        <div className="d-flex justify-content-center align-items-center position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }}>
          <SvgJitWebsiteLayoutFrames1 className="position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }} />
          <div className='d-flex flex-row align-items-center flex-nowrap position-absolute' style={{ zIndex: 1, maxWidth: '100%' }}>
            <h1 className="p-2 mt-auto mb-auto text-center fw-bold fs-1" >Navigation</h1>
          </div>
        </div>
      </section> */}

      {/* <section className="section2">
        <div className="d-flex justify-content-center align-items-center position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }}>
          <SvgJitWebsiteLayoutFrames2 className="position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }} />
          <div className='d-flex flex-row align-items-center flex-nowrap position-absolute' style={{ zIndex: 1, maxWidth: '100%' }}>
            <h1 className="p-2 mt-auto mb-auto text-center fw-bold fs-1" >CA</h1>
            <h1 className="p-2 mt-auto mb-auto text-center fw-light fs-2" >aaaaaaaaaaaaaaaaaa</h1>
          </div>
        </div>
      </section> */}

      {/* <section className="section3">
        <div className="d-flex justify-content-center align-items-center position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }}>
          <SvgJitWebsiteLayoutFrames3 className="position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }} />
          <div className='d-flex flex-column align-items-start flex-nowrap position-absolute top-50 start-0 translate-middle-y' style={{ zIndex: 1, maxWidth: '50%', maxHeight: 'auto' }}>
            <h1 className="p-2 mt-auto mb-auto fw-bold fs-1" >{about.aboutHeading}</h1>
            <figure className="p-2 mt-auto mb-auto fw-light fs-6 text-wrap">
              <blockquote className="blockquote">
                <p>{about.aboutText}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {about.quoteSource}
              </figcaption>
            </figure> */}
      {/* <h1 className="p-2 mt-auto mb-auto fw-light fs-6 text-wrap" >{about.aboutText}</h1> */}
      {/* </div>
          <video className="border rounded position-absolute me-3 top-50 end-0 translate-middle-y" style={{ zIndex: 1, width: '300px', height: '300px' }} controls>
            <source src="http://localhost:8000/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" />
          </video>
        </div>
      </section> */}

      {/* STACKED TITLE AND TEXT, VIDEO PULLED TO RIGHT AND CENTERED
      <section className="section4">
        <div className="d-flex justify-content-center align-items-center position-relative" >
          <div className='d-flex flex-row align-items-center justify-contents-center position-relative w-100'>
            <SvgJitWebsiteLayoutFrames4 className="position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }} />
            <video className="border rounded position-absolute top-50 end-0 translate-middle-y" style={{ zIndex: 1, width: '300px', height: '300px' }} controls>
              <source src="http://localhost:8000/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="position-absolute d-flex flex-column top-0 start-0" style={{ zIndex: 1 }}>
            <h1 className="p-2 mt-auto mb-auto text-center fw-bold fs-1">Section 4 heading</h1>
            <h1 className="p-2 mt-auto mb-auto text-center fw-light fs-2">Section 4 text</h1>
          </div>
        </div>
      </section> */}
      {/* VIDEO, SECTION TITLE, SECTION TEXT IN A ROW
      <section className="section4">
        <div className="d-flex justify-content-center align-items-center position-relative" >
          <SvgJitWebsiteLayoutFrames4 style={{ position: 'relative', width: '100%', height: 'auto', top: 0, left: 0 }} />
          <div className="d-flex flex-row align-items-center flex-nowrap position-absolute" style={{ zIndex: 1 }}>
            <video className="border rounded" style={{ zIndex: 1, width: '300px', height: '300px' }} controls>
              <source src="http://localhost:8000/JIT-promo-vid-meme-thumbnail.mp4" type="video/mp4" />
            </video>
            <h1 className="p-2 mt-auto mb-auto text-center fw-bold fs-1">Section 4 heading</h1>
            <h1 className="p-2 mt-auto mb-auto text-center fw-light fs-2">Section 4 text</h1>
          </div>
        </div>
      </section> */}

      {/* <section className="section5">
        <div className="d-flex justify-content-center align-items-center position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }}>
          <SvgJitWebsiteLayoutFrames5Wide style={{ position: 'relative', width: '100%', height: 'auto', top: 0, left: 0 }} />
          <div className='d-flex flex-column align-items-center flex-nowrap position-absolute' style={{ zIndex: 1, maxWidth: '100%', maxHeight: '100%' }}>
            <h1 className="p-2 mt-auto mb-auto text-center fw-bold fs-1" >Roadmap</h1>
            <h1 className="p-2 mt-auto mb-auto text-center fw-light fs-2" >Roadmap Info</h1>
          </div>
        </div>
      </section> */}

      {/* <section className="section6">
        <div className="d-flex justify-content-center align-items-center position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }}>
          <SvgJitWebsiteLayoutFrames6 className="position-relative" style={{ width: '100%', height: 'auto', top: 0, left: 0 }} />
          <div className='d-flex flex-column align-items-center flex-nowrap position-absolute' style={{ zIndex: 1, maxWidth: '100%', maxHeight: '100%' }}> */}
      {/* <Socialicons /> */}
      {/* <h6>JIT</h6>
            <h6>JIT Memecoin With Utility</h6>
            <div className="d-flex">
              {social_links.XTwitter && (
                <a href={social_links.XTwitterwitter}>
                  <FaXTwitter />
                </a>
              )}
              {social_links.discord && (
                <a href={social_links.discord}>
                  <FaDiscord />
                </a>
              )}
            </div>
            <h6 className="copyright m-0"> <FaRegCopyright /> 2024 JIT. All rights reserved.</h6>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default App;





// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Navigation from './components/nav/Navigation';
// import CriticalText from './components/critical/CriticalText';
// import About from './components/about/About';
// import Roadmap from './components/roadmap/Roadmap';
// import Buy from './components/buy/Buy';
// import Footer from './components/footer/Footer';
// // import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// const App = () => {
//   return (
//       <main>
//         <Navigation />
//         <CriticalText/>
//         <About/>
//         <Roadmap/>
//         <Buy/>
//         <Footer/>
//       </main>
//   );
// };

// export default App;