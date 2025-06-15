import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Acordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Keanu Reeves</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://i.pinimg.com/originals/d7/92/7a/d7927a18b015c8c0a4ee40d7344f1010.jpg"
            alt="Keanu Reeves"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
          />
          Keanu Charles Reeves es un actor y músico canadiense. Ha recibido numerosos reconocimientos en el cine que abarca cuatro décadas. En 2020, The New York Times lo clasificó como el cuarto mejor actor del siglo XXI, y en 2022 la revista Time lo nombró una de las 100 personas más influyentes del mundo.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Henry Cavill</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://images7.alphacoders.com/493/493342.jpg"
            alt="Henry Cavill"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
          />
          Henry William Dalgliesh Cavill es un actor británico. Inició su carrera con la película Laguna y luego desarrolló papeles en The Count of Monte Cristo, Tristan & Isolde y Stardust.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>J. K. Simmons</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzg2NTI5NzQ1MV5BMl5BanBnXkFtZTgwNjI1NDEwMDI@._V1_FMjpg_UX1000_.jpg"
            alt="J. K. Simmons"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
          />
          Jonathan Kimble Simmons es un actor estadounidense. Es conocido por su papel como Terence Fletcher en *Whiplash*, por el cual ganó un Óscar al mejor actor de reparto.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Robert Downey Jr.</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://i0.wp.com/tomatazos.buscafs.com/2021/06/robert-downey-jr-habla-mcu-influyo-carrera-inversionista.jpg?quality=75&strip=all"
            alt="Robert Downey Jr."
            style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
          />
          Robert Downey Jr. es un actor, productor y cantante estadounidense. Es mundialmente conocido por interpretar a Tony Stark/Iron Man en el Universo Cinematográfico de Marvel.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Scarlett Johansson</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Scarlett_Johansson-8588.jpg"
            alt="Scarlett Johansson"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
          />
          Scarlett Ingrid Johansson es una actriz y cantante estadounidense. Fue la actriz mejor pagada del mundo en 2018 y 2019, y es ampliamente reconocida por su papel de Black Widow en Marvel.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acordion;
