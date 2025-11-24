import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"; 
import meter2 from "../assets/img/meter2.svg"; 
import meter3 from "../assets/img/meter3.svg"; 
import bgGradientLeft from "../assets/img/color-sharp.png";
//import bgGradientRight from "../assets/img/color-sharp2.png";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As a full stack developer, I thrive on crafting seamless digital
                experiences from front to back. My skill set spans across modern
                frameworks, server-side development, databases, and UI/UX tools
                — allowing me to bring complete products to life with clean,
                scalable code. <br></br> I believe in writing code that’s not
                just functional, but also elegant, efficient, and maintainable.
                From dynamic React interfaces to robust Node.js APIs and
                intuitive database architecture, I love building systems that
                solve real-world problems. And when I’m not coding, I’m probably
                designing wireframes in Figma, pushing clean commits to GitHub,
                or exploring new tech stacks to level up my workflow.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay
                autoPlaySpeed={3000}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="React" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Node.js" />
                  <h5>Node.js & Express</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="SQL" />
                  <h5>SQL & Database Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="GitHub" />
                  <h5>Git & GitHub</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Figma" />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={bgGradientLeft} alt="" />
    </section>
  );
};

