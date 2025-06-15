import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Acordion from "./acordion";
import "./estilos.css";
import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function Actores() {
  return (
    <div className="Actores">
      <h1>Actores</h1>
      <Acordion />
    </div>
  );
}

function Peliculas() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const peliculas = [
    {
      titulo: "John Wick",
      imagen: "https://i.pinimg.com/736x/b8/f8/b5/b8f8b54e95ba2d2ca8ff3ce8f2cb2b83.jpg",
      resumen: "Keanu Reeves interpreta a un exasesino a sueldo que vuelve del retiro para vengar la muerte de su perro, regalo de su difunta esposa. Acción intensa y estilizada."
    },
    {
      titulo: "The Witcher",
      imagen: "https://wallpapercat.com/w/full/3/f/4/101127-1440x2560-mobile-hd-the-witcher-tv-series-background-image.jpg",
      resumen: "Henry Cavill encarna a Geralt de Rivia, un cazador de monstruos solitario en un mundo oscuro lleno de magia, política y criaturas salvajes."
    },
    {
      titulo: "Whiplash",
      imagen: "https://mrwallpaper.com/images/hd/whiplash-movie-poster-drum-tsgb9wjtgqgs7jjf.jpg",
      resumen: "J.K. Simmons interpreta a un implacable profesor de música que lleva al límite a su alumno en busca de la perfección. Ganadora del Óscar a Mejor Actor de Reparto."
    },
    {
      titulo: "Iron Man",
      imagen: "https://i.pinimg.com/originals/2b/69/47/2b694760f547993cb5a84c3e532cc122.jpg",
      resumen: "Robert Downey Jr. da vida a Tony Stark, un genio millonario que construye una armadura de alta tecnología y se convierte en el superhéroe Iron Man. Inicio del UCM."
    },
    {
      titulo: "Lucy",
      imagen: "https://i.pinimg.com/564x/bc/6e/dd/bc6eddd8ccdb2554bef18faaa0c17f50.jpg",
      resumen: "Scarlett Johansson es Lucy, una mujer que adquiere habilidades mentales sobrehumanas tras absorber una droga experimental. Ciencia ficción y acción frenética."
    }
  ];

  const handleShow = (pelicula) => {
    setModalContent(pelicula);
    setShow(true);
  };

  return (
    <div className="Peliculas">
      <h1>Películas</h1>
      {peliculas.map((peli, index) => (
        <Card className="mb-3 bg-dark text-white" key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <Card.Img
                src={peli.imagen}
                alt={peli.titulo}
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>{peli.titulo}</Card.Title>
                <Button variant="warning" onClick={() => handleShow(peli)}>
                  Ver resumen
                </Button>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>{modalContent.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">{modalContent.resumen}</Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Realizado por Tudela Mateo</p>
      <p>PUBLICIDAD: Programación Web</p>
    </footer>
  );
}

function Principal() {
  return (
    <div className="Principal">
      <div>
        <h2 style={{ textAlign: 'center', color: '#FFD700' }}>Cinemateca Boliviana</h2>
        <h1>MENU</h1>
        <ul>
          <li>
            <Link to="/">Actores</Link>
          </li>
          <li>
            <Link to="/pag2">Películas</Link>
          </li>
        </ul>
      </div>

      <div className="contenido">
        <Routes>
          <Route path="/" element={<Actores />} />
          <Route path="/pag2" element={<Peliculas />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Principal;