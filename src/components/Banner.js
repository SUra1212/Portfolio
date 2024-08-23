import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from "../assets/img/banner1.png";

export const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Full-Stack Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(3000 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Surath, `}
              <h1>
                {`A `}
                <span className="wrap">{text}</span>
              </h1>
            </h1>
            <p>
              Passionate and skilled software engineer with a robust foundation in programming and problem-solving. Proficient in multiple programming languages and development tools, with extensive experience in full-stack development, agile methodologies, and software testing. Demonstrated ability to design and implement scalable, efficient, and maintainable software solutions. Committed to staying up-to-date with emerging technologies and collaborating with cross-functional teams to deliver cutting-edge products.
            </p>
            <div style={{ marginTop: -50 }}>
              <a
                href="https://drive.google.com/file/d/1Nx6dK29L2B22a2B3hN6xp5eH_ppsZ3O2/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", marginLeft: "15px" }}
              >
                <button
                  style={{
                    backgroundColor: "#aa367c",  
                    color: "#fff",              
                    padding: "10px 20px",        
                    borderRadius: "5px",         
                    cursor: "pointer",          
                    transition: "background-color 0.3s ease" 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#4a2fbd"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#aa367c"}
                >
                  Download CV
                </button>
              </a>
            </div>
            <div style={{ marginTop: -15 }}>
              <a href="#connect" style={{ textDecoration: "none" }}>
                <button onClick={() => console.log("Connect!")}>
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
