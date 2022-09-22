import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext, useState } from "react";
import MovieContext from "./MovieContext.js";
import { useNavigate } from "react-router-dom";

function OffcanvasNavbar() {
  const { searchMovie, setSearchMovie, movies, setMovies } =
    useContext(MovieContext);
  const navigate = useNavigate();

  function Search() {
    const filteredSearch = movies.filter(
      (title) => title.title.toLowerCase() === searchMovie
    );
    if (filteredSearch.length > 0) {
      setMovies(filteredSearch);
      navigate("/search");
    } else alert("not found!");
  }

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">TMDB</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  The Movie Database
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/addmovie">Add Movie</Nav.Link>
                  <Nav.Link href="/movies">All Movies</Nav.Link>
                </Nav>
                <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                  <Form.Control
                    type="search"
                    placeholder="Search for movies!"
                    className="me-2"
                    aria-label="Search"
                    value={searchMovie}
                    onChange={(e) => setSearchMovie(e.target.value)}
                  />
                  <Button variant="outline-success" onClick={Search}>
                    Search
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasNavbar;
