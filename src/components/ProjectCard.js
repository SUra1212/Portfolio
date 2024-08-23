import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitHubUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{description}</span>
          {gitHubUrl && (
            <h5>
              <a style={{color: "#000"}} href={gitHubUrl}>Click me!</a>
            </h5>
          )}
        </div>
      </div>
    </Col>
  );
};
