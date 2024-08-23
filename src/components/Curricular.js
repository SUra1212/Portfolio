import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Curricular = () => {
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

  return (
    <section className="curricular" id="curricular">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="curricular-bx wow zoomIn">
              <h2 style={{ marginBottom: "40px" }}>
                Co - Curricular Activities{" "}
              </h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme curricular-slider"
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
        </div>
      </div>
    </section>
  );
};
