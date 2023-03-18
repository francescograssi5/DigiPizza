import logo from "../logoNew.png";
import { BsInstagram, BsFacebook, BsFillTelephoneFill } from "react-icons/bs";

const Orari = () => {
  return (
    <div className="d-flex flex-wrap justify-content-around divHour">
      <div className="col-12 col-sm-3 pb-4 mt-1">
        <table className="w-100 h-75 border border-4 text-center ingredientFont ">
          <tbody>
            <tr>
              <td>Massafra Via Roma, 230</td>
            </tr>
            <tr className="border-bottom">
              <td>TEL. 0998807774</td>
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
        <img src={logo} className="w-100 logoResponsive"></img>
      </div>
      <div className="col-12 col-sm-5 p-1 marginResp">
        <table id="tableHours" className="ingredientFont tableResponsive">
          <tbody>
            <tr>
              <th colSpan="7">Nuovo orario invernale dal 10 ottobre</th>
            </tr>
            <tr>
              <th>Giorno</th>
              <th>Apertura Pranzo</th>
              <th className="borderright">Chiusura Pranzo</th>
              <th>Apertura Cena</th>
              <th>Chiusura Cena</th>
            </tr>
            <tr>
              <td>Lunedì</td>
              <td>Chiuso</td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Martedì</td>
              <td>12:00</td>
              <td className="borderright">15:30</td>
              <td>19:00</td>
              <td>24:00</td>
            </tr>
            <tr>
              <td>Mercoledì</td>
              <td>12:00</td>
              <td className="borderright">15:30</td>
              <td>19:00</td>
              <td>24:00</td>
            </tr>
            <tr>
              <td>Giovedì</td>
              <td>12:00</td>
              <td className="borderright">15:30</td>
              <td>19:00</td>
              <td>24:00</td>
            </tr>
            <tr>
              <td>Venerdì</td>
              <td>12:00</td>
              <td className="borderright">15:30</td>
              <td>19:00</td>
              <td>24:00</td>
            </tr>
            <tr>
              <td>Sabato</td>
              <td>12:00</td>
              <td className="borderright">15:30</td>
              <td>19:00</td>
              <td>01:00</td>
            </tr>
            <tr>
              <td>Domenica</td>
              <td>12:00</td>
              <td className="borderright">15:30</td>
              <td>19:00</td>
              <td>24:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-12 col-sm-3 p-4">
        <img src={logo} className="w-100 "></img>
        <table className="w-100 h-75 border border-4 text-center">
          <tbody>
            <tr className="border">
              <td>
                <a
                  href="https://www.instagram.com/digipizza"
                  className="ancora ingredientFont"
                >
                  <BsInstagram className="mx-2" />
                  @digipizza
                </a>
              </td>
            </tr>
            <tr className="border">
              <td>
                <a
                  href="https://www.facebook.com"
                  className="ancora ingredientFont"
                >
                  <BsFacebook className="mx-2" />
                  DigiPizza
                </a>
              </td>
            </tr>
            <tr className="border ingredientFont">
              <td>
                <BsFillTelephoneFill className="mx-2" />
                0998807774
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Orari;
