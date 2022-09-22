import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Movies({ movies }) {
  const navigate = useNavigate();
  const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
  `;
  return (
    <>
      <StyledDiv>
        <Row xs={1} md={2} className="g-4">
          {movies.map((movie) => (
            <Col>
              <Card>
                <Card.Img
                  style={{ width: "200px", height: "300px" }}
                  variant="top"
                  src={movie.image_path}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    Genre: {movie.genre}
                    <br></br>
                    Release Date: {movie.release_date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </StyledDiv>
    </>
  );
}

export default Movies;
