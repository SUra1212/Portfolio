import { Container, Row, Col } from "react-bootstrap";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";
import NavIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} style={{ marginTop: "40px" }}>
            {/* <img src={logo} alt="Logo" /> */}
            <h2 className="footerName">Surath Chathuranga Arachchi</h2>
          </Col>
          <Col
            size={12}
            sm={6}
            className="text-center text-sm-end"
            style={{ marginTop: "40px" }}
          >
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/surath-chathuranga-arachchi-bbb04a220/">
                <img src={NavIcon1} alt="LinkenIn" />
              </a>
              <a href="https://www.facebook.com/surath.chathuranga.14?mibextid=kFxxJD">
                <img src={NavIcon2} alt="facebook" />
              </a>
              <a href="https://medium.com/@surathc004">
                <img src={NavIcon3} alt="medium" />
              </a>
              <a href="https://github.com/SUra1212">
                <img src={NavIcon4} alt="github" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
