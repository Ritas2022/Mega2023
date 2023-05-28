import { useEffect, useState } from "react";
import {
  DivEl,
  TextTitle,
  DivHor,
  Text,
  TextPrize,
  TextWinner,
  DivHorTitle,
  DivHorNums,
} from "./styles";
import LotoImage from "../../assets/trevo-lotofacil.png";
import api from "../../services/api";
import { Props } from "../../types";

export default function Lotofacil() {
  const [loto, setLoto] = useState<Props>({} as Props);
  useEffect(() => {
    async function GetData() {
      let resp = await api.get("/");
      setLoto(resp.data.lotofacil);
    }

    GetData();
  }, []);
  if (!loto.numeroDoConcurso) {
    return <h2>Carregando dados...</h2>;
  } else
    return (
      <DivHor>
        <DivEl>
          <DivHorTitle>
            <img src={LotoImage} width={20} height={20} />
            <TextTitle>LOTOFÁCIL</TextTitle>
          </DivHorTitle>
          <Text>{`Estimativa de prêmio do próximo concurso.`}</Text>
          <br></br>
          <Text>Sorteio em {loto.dataApuracao}</Text>

          <TextPrize>R$ {loto.valorEstimadoProximoConcurso}</TextPrize>
        </DivEl>
        <DivEl>
          <DivEl>
            <DivHorNums>
              {loto.dezenas.slice(0, 5).map((item, index) => {
                return <TextTitle key={index}>{item}</TextTitle>;
              })}
            </DivHorNums>

            <DivHorNums>
              {loto.dezenas.slice(5, 10).map((item, index) => {
                return <TextTitle key={index}>{item}</TextTitle>;
              })}
            </DivHorNums>
            <DivHorNums>
              {loto.dezenas.slice(10, 15).map((item, index) => {
                return <TextTitle key={index}>{item}</TextTitle>;
              })}
            </DivHorNums>
          </DivEl>
          <TextWinner>
            {" "}
            {loto.quantidadeGanhadores}{" "}
            {loto.quantidadeGanhadores > 1 ? "GANHADORES" : "GANHADOR"}
          </TextWinner>
          <Text>
            {" "}
            Concurso {loto.numeroDoConcurso} - {loto.dataPorExtenso}
          </Text>
        </DivEl>
      </DivHor>
    );
}
