import CardsPlay from "../../components/CardsPlay";
import { Header } from "../../components/Header";
import TempusFugitImg from "../../assets/pecas/tempus-fugit/bg.jpeg";
import chaoBrasilImg from "../../assets/pecas/chao-brasil/chaobrasil.jpg";
import bardocaminhoImg from "../../assets/pecas/bar-do-caminho/bar.jpeg";
import Footer from "../../components/Footer";

export function Seasons() {
  return (
    <>
      <Header />
      <CardsPlay
        text={"Em tempus Fugit nós acompanhamos um futuro distópico pós apocalíptico onde os últimos sobreviventes da humanidade vivem em um labirinto subterrâneo, acompanhamos a história de Anne e Isac que buscam respostas aos mistérios do labirinto. "}
        imgUrl={TempusFugitImg}
        title={"Tempus Fugit"}
        year={"2024"} path={"/temporadas/tempus-fugit"}      ></CardsPlay>

      <CardsPlay
        text={
          "Nessa remontagem contamos a história do Palhaço da Lua com algumas alterações e adaptações, discutimos um Brasil que começa a participar do emigração, não mais um local onde os imigrantes costumam procurar, mas agora um país onde os nativos começam a imigrar em busca de oportunidades melhores. "
        }
        imgUrl={chaoBrasilImg}
        title={"Chao Brasil"}
        year={"2023"}
        path={""} 
      ></CardsPlay>

      <CardsPlay
        text={
          "E quando o que tudo sobra é a saudade do que foi ficando pelo caminho? Contamos a história do Sr Tulio o dono do bar do caminho, o bar era conhecido assim por que ficava no caminho de muitas pessoas que voltavam pra casa, sabe aqueles barzinhos que também são mercearia e estão na memória de todo brasileiro? pois é... É esse mesmo "
        }
        imgUrl={bardocaminhoImg}
        title={"Bar do caminho"}
        year={"2022"}
        path={""} 
      ></CardsPlay>

      <Footer />
    </>
  );
}

export default Seasons;
