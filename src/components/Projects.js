import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

export const Projects = () => {
  const projects = [
    {
      title: "Advertise Campaign",
      description:
        "A dynamic campaign builder for digital marketers, enabling users to create, preview, and manage ad creatives across platforms. Built with React, styled-components, and modular state handling.",
      imgUrl: "",
    },
    {
      title: "Snapgram",
      description:
        "A social-sharing app inspired by Instagram and Snapchat. Users can post, like, and view ephemeral content. Developed with React, Firebase Auth, Firestore, and real-time updates.",
      imgUrl: "",
    },
    {
      title: "Rock Scissor Paper Game",
      description:
        "A fun, interactive browser game built in pure JavaScript. Features score tracking, responsive design, and basic game logic for instant playability.",
      imgUrl: "",
    },
    {
      title: "Signing Count Firebase",
      description:
        "A user authentication and real-time sign-in tracker built with Firebase. Visualizes user activity and tracks login frequency using Firestore data.",
      imgUrl: "",
    },
    {
      title: "Fiverr App",
      description:
        "A Fiverr-inspired marketplace clone that showcases gig listings, filters, reviews, and freelancer/client profiles. Built using React, Redux, and mock REST API for data handling.",
      imgUrl: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Throughout my projects, I’ve built responsive, full-stack web
              applications using a modern tech stack and professional workflows.{" "}
              <br></br>On the front-end, I work with React.js, utilizing hooks,
              React Router, and styled-components to create dynamic, modular
              interfaces. <br></br>For the back-end, I use Node.js with Express
              to build RESTful APIs, often tested through Postman, and integrate
              Firebase services or relational databases like MySQL and
              PostgreSQL using efficient, well-structured SQL queries. I manage
              state, authentication, and real-time data through platforms like
              Firestore and Firebase Auth. <br></br>My development workflow
              includes Git and GitHub for version control, VS Code with ESLint
              and Prettier for clean code, and deployment via Netlify or Vercel.{" "}
              <br></br>I also incorporate design tools like Figma and follow
              component-based architecture and Agile methodologies to ensure
              scalable, maintainable, and user-focused solutions.
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                    <Tab.Pane eventKey="fourth">Fourth tab content</Tab.Pane>
                    <Tab.Pane eventKey="fifth">Fifth tab content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
