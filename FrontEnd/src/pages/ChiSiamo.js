import { Card, Carousel } from "react-bootstrap";
import castle from "../castleCard.png";
import fattorino from "../1.png";
import pizzaiolo from "../2.png";
import camereire1 from "../3.png";
import cameriere2 from "../4.png";
import sanCosimo from "../sancosimoCard.png";
const ChiSiamo = () => {
  return (
    <>
      <div className="backg2">
        <div className="container ">
          <h1 className="text-center pizzaCategory">Chi siamo</h1>
          <p className="ingredientFont text-center">
            Siamo un gruppo di sognatori che pensa si possa costruire un mondo
            migliore…tutti insieme anche grazie a te.
          </p>
          <div className="d-flex align-items-center">
            <Card className="cardChiSiamo paddingMq border border-3 rounded">
              <Card.Img variant="top" src={pizzaiolo} />
            </Card>
            <div className="col-6 text-center">
              <h1 className="pizzaCategory">Gianni Baffo</h1>
              <h3 className="pizzafont">Pizzaiolo</h3>
              <p className="ingredientFont">L'acrobata delle pizze</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="col-6 text-center">
              <h1 className="pizzaCategory">Jefe</h1>
              <h3 className="pizzafont">Cameriera</h3>
              <p className="ingredientFont">L'eleganza a portata di tutti</p>
            </div>
            <Card className="cardChiSiamo paddingMq border border-3 rounded">
              <Card.Img variant="top" src={camereire1} />
            </Card>
          </div>
          <div className="d-flex align-items-center">
            <Card className="cardChiSiamo paddingMq border border-3 rounded">
              <Card.Img variant="top" src={cameriere2} />
            </Card>
            <div className="col-6 text-center">
              <h1 className="pizzaCategory">Omar Falco</h1>
              <h3 className="pizzafont">Cameriere</h3>
              <p className="ingredientFont">
                Recordman, porta 10 pizze per mano!
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="col-6 text-center">
              <h1 className="pizzaCategory">Luca Schiaretti</h1>
              <h3 className="pizzafont">Driver</h3>
              <p className="ingredientFont">
                Vola per le strade, per portarti le pizze
              </p>
            </div>
            <Card className="cardChiSiamo paddingMq border border-3 rounded">
              <Card.Img variant="top" src={fattorino} />
            </Card>
          </div>
          <div className="d-flex flex-wrap flex-center">
            <h1 className="text-center pizzaCategory mt-5 mb-3 col-12">
              Dove siamo
            </h1>
            <Card className="doveSiamoCard mb-4">
              <Card.Header>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={castle}
                      alt="First slide"
                    />
                    <Carousel.Caption className="bg-nav opacity-75 text-dark">
                      Ci trovi a Massafra(TA), una cittadina caratteristica, con
                      un centro storico e la catena di pizzerie più invidiati al
                      mondo.
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={sanCosimo}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <table className="w-100 h-75 border border-4 text-center smallTableFont bg-nav opacity-75 ">
                        <tbody>
                          <tr>
                            <td>Massafra Via Roma, 230</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>TEL. 0998807773</td>
                          </tr>
                          <tr>
                            <td>Massafra Via Italia, 33</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>TEL. 0998809078</td>
                          </tr>
                          <tr>
                            <td>Massafra Via Marconi, 252</td>
                          </tr>
                          <tr className="border-bottom">
                            <td>TEL. 0998807377</td>
                          </tr>
                        </tbody>
                      </table>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Header>
              <Card.Body className="pizzaFont text-center">
                Vieni a trovarci o chiamaci per ordinare direttamente da casa
                tua!
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChiSiamo;
