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
import SvgJitWebsiteLayoutFrames2 from './components/svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames2';
import SvgJitWebsiteLayoutFrames3 from './components/svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames3';
import SvgJitWebsiteLayoutFrames4 from './components/svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames4';
import SvgJitWebsiteLayoutFrames5Wide from './components/svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames5Wide';
import SvgJitWebsiteLayoutFrames6 from './components/svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames6';
import { Row, Container, Col } from 'react-bootstrap';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const App = () => {
  return (
    <div>
      <section className="section1">
        <div className="d-flex justify-content-center align-items-center">
          <div className='d-flex flex-row align-items-center' style={{ position: 'absolute', zIndex: 1 }}>
            {/* <p className="p-2 mt-auto mb-auto" >CA</p>
            <p className="p-2 mt-auto mb-auto" >aaaaaaaaaaaaaaaaaa</p> */}
            <h1 className="p-2 mt-auto mb-auto text-center fw-bold fs-1" >CA</h1>
            <h1 className="p-2 mt-auto mb-auto text-center fw-light fs-2" >aaaaaaaaaaaaaaaaaa</h1>
          </div>
          <SvgJitWebsiteLayoutFrames1 style={{ position: 'relative', width: '100%', height: 'auto', top: 0, left: 0 }} />
        </div>
        {/* <Container fluid>
          <Row>
            <Col style={{ position: 'relative' }}>
              <SvgJitWebsiteLayoutFrames1 />
              <div className="d-flex justify-content-center" style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 0, zIndex: 1 }}> */}
                {/* Your content for section 1 */}
                {/* <h1>Section 1 Title</h1>
                <p>This is some text for section 1.</p> */}
                {/* <img src="image1.jpg" alt="Image 1" /> */}
              {/* </div>
            </Col>
          </Row>
        </Container> */}
      </section>
      <section className="section2">
        <Container fluid>
          <Row>
            <Col style={{ position: 'relative' }}>
              <SvgJitWebsiteLayoutFrames2 />
              <div className="content" style={{ position: 'absolute', width: '100%', height: 'auto', top: 0, left: 0, zIndex: 1 }}>
                {/* Your content for section 1 */}
                <h1>Section 1 Title</h1>
                <p>This is some text for section 1.</p>
                <img src="image1.jpg" alt="Image 1" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section3">
        <Container fluid>
          <Row>
            <Col>
              <SvgJitWebsiteLayoutFrames3 />
              {/* Your content for section 2 */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section4">
        <Container fluid>
          <Row>
            <Col>
              <SvgJitWebsiteLayoutFrames4 />
              {/* Your content for section 3 */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section5">
        <Container fluid>
          <Row>
            <Col>
              <SvgJitWebsiteLayoutFrames5Wide />
              {/* Your content for section 4 */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section6">
        <Container fluid>
          <Row>
            <Col>
              <SvgJitWebsiteLayoutFrames6 />
              {/* Your content for section 4 */}
            </Col>
          </Row>
        </Container>
      </section>
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