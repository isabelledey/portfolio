import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-icons";
import headerImg from '../assets/img/header-img.png';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">welcome to my portfolio</span>
            <h1>
              {`Hi, I'm Isabelle`}
              <span className="wrap">Full Stack Developer</span>
            </h1>
            <p>
              a passionate Full Stack Developer with a love for turning ideas
              into interactive, user-friendly web applications. I specialize in
              building efficient, scalable solutions using technologies like
              React, Node.js, and SQL. Whether it's crafting intuitive front-end
              experiences or designing solid back-end systems, I enjoy bringing
              both sides of development together to solve real-world problems
              with clean, maintainable code.
            </p>
            <button onClick={() => console.log('connect')}>Let's Connect</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
