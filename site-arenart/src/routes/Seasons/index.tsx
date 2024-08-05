import CardsPlay from "../../components/CardsPlay";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import * as playsService from "../../services/plays-services";
import { PlaysDTO } from "../../models/plays";


export function Seasons() {
  return (
    <>
      <Header />

      {playsService.playsSeason
        .slice()
        .sort((a, b) => {
          const yearA = parseInt(a.year[0], 10); // Pega o primeiro ano da lista e converte para número
          const yearB = parseInt(b.year[0], 10); // Pega o primeiro ano da lista e converte para número
          
          return yearA + yearB; // Compara os anos
        })
        .map((play: PlaysDTO) => (
          <CardsPlay
            text={play.shortDescription}
            imgUrl={
             play.imgUrl
            }
            title={play.name}
            year={play.year.join(" - ")}
            path={""}
          />
        ))}



      <Footer />
    </>
  );
}

export default Seasons;
