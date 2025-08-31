import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}></Col>
        </Row>
      </Container>
    </section>
  );
};
