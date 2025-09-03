import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import headerImg from "../assets/img/header-img1.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full Stack Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const period = 1000;

useEffect(() => {
  const i = loopNum % toRotate.length;
  const fullText = toRotate[i];

  const tick = () => {
    let updatedText;

    if (isDeleting) {
      if (text.length > 1) {
        updatedText = fullText.substring(0, 0);
        setText(updatedText);
      } else {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(300 - Math.random() * 100);
      }
    } else {
      updatedText = fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (updatedText === fullText) {
        setIsDeleting(true);
        //setDelta(period);
      }
    }
  };

  const ticker = setInterval(tick, delta);
  return () => clearInterval(ticker);
}, [text, isDeleting, loopNum, delta]);


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">welcome to my portfolio</span>
            <h1>
              {`Hi, I'm Isabelle `}
              <hr />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              A passionate Full Stack Developer with a love for turning ideas
              into interactive, user-friendly web applications. I specialize in
              building efficient, scalable solutions using technologies like
              React, Node.js, and SQL. Whether it's crafting intuitive front-end
              experiences or designing solid back-end systems, I enjoy bringing
              both sides of development together to solve real-world problems
              with clean, maintainable code.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
