import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import skillsImg1 from "../assets/img/webdeveloper.png";
import skillsImg2 from "../assets/img/gard.png";

export const Skills = () => {
  const [isOpen, setIsOpen] = useState(false)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="skill" id="skills">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>SKILLS</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>.NET Core</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Azure Devops</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>SAP</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>SAP HANA</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JAVA</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <br /><br /> <br />

        <div className="row">
          <div className="col-md-4 col-12">
            <img className="image img-fluid" src={skillsImg1} alt="Header Img" />
          </div>

          <div className="col-md-8 col-12">
            <div className="skill-bx1 wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>EXPERIENCE</h2>
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">ASSOCIATE SOFTWARE ENGINEER 👨‍💻</h5>
                    <h6 className="card-subtitle text-muted">
                      PRISTINE SOLUTION (PVT) LTD - JAN 2023 - PRESENT
                    </h6>
                    <div className="card-popup">
                      <p className="card-text">
                        Collaborated with the team to develop web using Angular, .NET core with SQL, and SAP integration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">INTERN SOFTWARE ENGINEER 👨‍💻</h5>
                    <h6 className="card-subtitle text-muted">
                      PRISTINE SOLUTION (PVT) LTD - JULY 2022 – DEC 2022
                    </h6>
                    <div className="card-popup">
                      <p className="card-text">
                        Collaborated with the team to develop web using Angular and SAP HANA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <br /><br /> <br />

        <div className="row">

          <div className="col-md-8 col-12">
            <div className="skill-bx2 wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>EDUCATION</h2>
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">DEGREE 🧑‍🎓</h5>
                    <h6 className="card-subtitle text-muted">
                      BSc (Hons) in Information Technology Specializing in Software Engineering – SLIIT
                    </h6>
                    <div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">HIGH SCHOOL 🧑‍🏫</h5>
                    <h6 className="card-subtitle text-muted">
                      Medirigiriya National College GCE A/L 2019 (Technology Stream) ,
                      GCE O/L 2016
                    </h6>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <img className="image img-fluid" src={skillsImg2} alt="Header Img" />
          </div>
        </div>
        <br /><br /> <br />

        {/* <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>
                Co - Curricular Activities{" "}
              </h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>International Conference on Advancements in Computing 2023
                  </h5>
                </div>
                <div className="item">
                  <h5>English Language Immersion Course</h5>
                </div>
                <div className="item">
                  <h5>Member of the junior prefect court of the college in the academic year 2009</h5>
                </div>
                <div className="item">
                  <h5>
                    Member in The Environmental Pioneer Brigade
                  </h5>
                </div>
                <div className="item">
                  <h5>
                    Member in the college Cricket Team
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>Memberships </h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>
                    Member of the junior prefect court of the college in the
                    academic year 2009
                  </h5>
                </div>
                <div className="item">
                  <h5>Member of the Commerce Society 2017 - 2018</h5>
                </div>
                <div className="item">
                  <h5>Member of the college dancing group</h5>
                </div>
                <div className="item">
                  <h5>Member of the college swimming team</h5>
                </div>
                <div className="item">
                  <h5>Member of Sri Lanka Girl Guide Association</h5>
                </div>
                <div className="item">
                  <h5>Member of the Astronomical Society 2014 – 2015</h5>
                </div>
                <div className="item">
                  <h5>Member of the College ICT Club 2015 - 2016</h5>
                </div>
                <div className="item">
                  <h5>Member of the College Media Unit 2017- 2018</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div> */}
      </div>
      {/* <img className="background-image-left" src={clorsharp} alt="Image" /> */}
    </section>
  );
};
